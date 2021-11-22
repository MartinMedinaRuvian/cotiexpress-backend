const Producto = require('../modelo/Producto')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'producto';

class ProductoDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async obtenerFiltrado(filtro){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + " WHERE descripcion LIKE '%" + filtro + "%'");
        return datos;
    }

    async buscarPorUsuario(codigo_usuario){
        const datos = await conexion.query('SELECT * FROM producto WHERE codigo = (SELECT codigo_producto FROM vendedor_producto WHERE codigo_vendedor = (SELECT codigo FROM vendedores WHERE codigo_usuario=?))', [codigo_usuario]);
        return datos;
    }

    async yaExiste(descripcion){
        const obj = new Producto();
        
        obj.descripcion = descripcion;

        const yaExiste = await conexion.query('SELECT descripcion FROM ' + nombreTabla + ' WHERE descripcion=?', [obj.descripcion]);

        if(yaExiste.length > 0){
            return true;
        }
        return false;
    }

    async guardar(datos){

        const {descripcion, foto, precioUnidad, codigoCategoria} = datos;

        const obj = new Producto(descripcion, foto, precioUnidad, codigoCategoria);
        
        const datosGuardar = {
            descripcion: obj.descripcion,
            foto: obj.foto,
            precio_unidad: obj.precioUnidad,
            codigo_categoria: obj.codigoCategoria
        }

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
        
        if(guardar.affectedRows > 0){
            return guardar.insertId;
        }

        return -1;
    }

    async eliminar(codigo){
        const obj = new Producto();
        
        obj.codigo = codigo;

        const eliminar = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE codigo=?', [obj.codigo]);

        if(eliminar.length > 0){
            return true;
        }
        return false;
    }

    async actualizar(codigo, datos){
        const actualizar = await conexion.query('UPDATE ' + nombreTabla + ' SET ? WHERE codigo=?', [datos,  codigo]);
        if(actualizar.affectedRows > 0){
            return true;
        }
        return false;
    }

}

module.exports= ProductoDAO;