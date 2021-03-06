const Empresa = require('../modelo/Empresa')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'empresa';

class EmpresaDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async obtenerFiltrado(filtro){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + " WHERE nombre LIKE '%" + filtro + "%'");
        return datos;
    }

    async buscarPorCodigo(codigo){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + ' WHERE codigo =?', [codigo]);
        return datos;
    }

    async yaExiste(nombre){
        const obj = new Empresa();
        
        obj.nombre = nombre;

        const yaExiste = await conexion.query('SELECT nombre FROM ' + nombreTabla + ' WHERE nombre=?', [obj.nombre]);

        if(yaExiste.length > 0){
            return true;
        }
        return false;
    }

    async guardar(datos){

        const {nombre, direccion, telefono} = datos;

        const obj = new Empresa(nombre, direccion, telefono);
        
        const datosGuardar = {
            nombre: obj.nombre,
            direccion: obj.direccion,
            telefono: obj.telefono
        }

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
        
        if(guardar.affectedRows > 0){
            return guardar.insertId;
        }

        return -1;
    }

    async eliminar(codigo){
        const obj = new Empresa();
        
        obj.codigo = codigo;

        const eliminar = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE codigo=?', [obj.codigo]);

        if(eliminar.length > 0){
            return true;
        }
        return false;
    }

    async actualizar(codigo, datos){
        const obj = new Empresa();
 
        obj.codigo = codigo;

        const actualizar = await conexion.query('UPDATE ' + nombreTabla + ' SET ? WHERE codigo=?', [datos,  obj.codigo]);
        
        if(actualizar.affectedRows > 0){
            return true;
        }
        return false;
    }

}

module.exports= EmpresaDAO;