const Vendedor = require('../modelo/Vendedor')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'vendedor';

class VendedorDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async obtenerFiltrado(filtro){
        const datos = await conexion.query("SELECT * FROM vendedor WHERE nombres LIKE '%" + filtro + "%'");
        return datos;
    }

    async yaExiste(identificacion){
        const obj = new Vendedor();
        
        obj.identificacion = identificacion;

        const yaExiste = await conexion.query('SELECT identificacion FROM ' + nombreTabla + ' WHERE identificacion=?', [obj.identificacion]);

        if(yaExiste.length > 0){
            return true;
        }
        return false;
    }

    async guardar(datos){

        const {nombres, apellidos, identificacion, email, codigoUsuario, codigoEmpresa} = datos;

        const obj = new Vendedor(nombres, apellidos, identificacion, email, codigoUsuario, codigoEmpresa);

        const datosGuardar = {
            nombres: obj.nombres,
            apellidos: obj.apellidos,
            identificacion: obj.identificacion,
            email: obj.email,
            codigo_usuario: obj.codigoUsuario,
            codigo_empresa: obj.codigoEmpresa
        }

        console.log(datosGuardar, 'VENDEDOR GUARDAR')

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
        
        if(guardar.affectedRows > 0){
            return true;
        }

        return false;
    }

    async yaExisteUsuario(codigoUsuario){
        const obj = new Vendedor();
        
        obj.codigo_usuario = codigoUsuario;

        const yaExiste = await conexion.query('SELECT codigo_usuario FROM ' + nombreTabla + ' WHERE codigo_usuario=?', [obj.codigo_usuario]);

        if(yaExiste.length > 0){
            return true;
        }
        return false;
    }

    async obtener(codigo_usuario){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + ' WHERE codigo_usuario=?', [codigo_usuario]);
        return datos;
    }

    async buscarEmpresaPorCodigoProducto(codigoProducto){
        const datos = await conexion.query('SELECT * FROM empresa WHERE codigo = (SELECT codigo_empresa FROM vendedor WHERE codigo = (SELECT codigo_vendedor FROM vendedor_producto WHERE codigo_producto=?))', [codigoProducto]);
        return datos;
    }


    async actualizar(codigo, datos){
        const actualizar = await conexion.query('UPDATE ' + nombreTabla + ' SET ? WHERE codigo=?', [datos,  codigo]);
        if(actualizar.affectedRows > 0){
            return true;
        }
        return false;
    }

    
    async cambiarEstado(dato){
        const { codigo, estado } = dato;
        const nuevoEstado = estado === '1' ? '2' : '1';
        const actualizar = await conexion.query('UPDATE ' + nombreTabla + ' SET estado=? WHERE codigo=?', [nuevoEstado,  codigo]);
        if(actualizar.affectedRows > 0){
            return true;
        }
        return false;
    }

}

module.exports= VendedorDAO;