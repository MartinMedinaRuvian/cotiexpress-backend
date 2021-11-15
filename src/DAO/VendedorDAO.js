const Vendedor = require('../modelo/Vendedor')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'vendedor';

class VendedorDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
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

        const {nombres, apellidos, identificacion, telefono, email, codigo_usuario, codigo_empresa} = datos;

        const obj = new Vendedor(nombres, apellidos, identificacion, telefono, email, codigo_usuario, codigo_empresa);

        const datosGuardar = {
            nombres: obj.nombres,
            apellidos: obj.apellidos,
            identificacion: obj.identificacion,
            telefono: obj.telefono,
            email: obj.email,
            codigo_usuario: obj.codigo_usuario,
            codigo_empresa: codigo_empresa
        }


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

    async actualizar(codigo, datos){
        const actualizar = await conexion.query('UPDATE ' + nombreTabla + ' SET ? WHERE codigo=?', [datos,  codigo]);
        if(actualizar.affectedRows > 0){
            return true;
        }
        return false;
    }

}

module.exports= VendedorDAO;