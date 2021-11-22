const Cliente = require('../modelo/Cliente')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'Cliente';

class ClienteDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async obtenerFiltrado(filtro){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + " WHERE nombres LIKE '%" + filtro + "%'");
        return datos;
    }

    async yaExiste(identificacion){
        const obj = new Cliente();
        
        obj.identificacion = identificacion;

        const yaExiste = await conexion.query('SELECT identificacion FROM ' + nombreTabla + ' WHERE identificacion=?', [obj.identificacion]);

        if(yaExiste.length > 0){
            return true;
        }
        return false;
    }

    async guardar(datos){

            const {nombres, apellidos, identificacion, telefono, direccion, codigoUsuario} = datos;
    
            const obj = new Cliente(nombres, apellidos, identificacion, telefono, direccion, codigoUsuario);
    
            const datosGuardar = {
                nombres: obj.nombres,
                apellidos: obj.apellidos,
                identificacion: obj.identificacion,
                telefono: obj.telefono,
                direccion: obj.direccion,
                codigo_usuario: obj.codigoUsuario
            }

            console.log(datosGuardar, 'DATO GUARDAR')
    
            const guardarCliente = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
            if(guardarCliente.affectedRows > 0){
                return true;
            }
        return false;
    }

    async yaExisteUsuario(codigoUsuario){
        const obj = new Cliente();
        
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

module.exports= ClienteDAO;