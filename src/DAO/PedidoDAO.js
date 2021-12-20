const Pedido = require('../modelo/Pedido')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'pedido';

class PedidoDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async obtenerFiltrado(filtro){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + " WHERE descripcion LIKE '%" + filtro + "%'");
        return datos;
    }

    async yaExiste(descripcion){
        const obj = new Pedido();
        
        obj.descripcion = descripcion;

        const yaExiste = await conexion.query('SELECT descripcion FROM ' + nombreTabla + ' WHERE descripcion=?', [obj.descripcion]);

        if(yaExiste.length > 0){
            return true;
        }
        return false;
    }

    async guardar(datos){

        const {cantidad, precioUnidad} = datos;

        const obj = new Pedido(cantidad, precioUnidad);
        
        const datosGuardar = {
            cantidad: obj.cantidad,
            precio_unidad: obj.precioUnidad
        }

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
        
        if(guardar.affectedRows > 0){
            return guardar.insertId;
        }

        return -1;
    }

    async eliminar(codigo){
        const obj = new Pedido();
        
        obj.codigo = codigo;

        const eliminar = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE codigo=?', [obj.codigo]);

        if(eliminar.length > 0){
            return true;
        }
        return false;
    }

    async actualizar(codigo, datos){
        const obj = new Pedido();
 
        obj.codigo = codigo;

        const actualizar = await conexion.query('UPDATE ' + nombreTabla + ' SET ? WHERE codigo=?', [datos,  obj.codigo]);
        if(actualizar.length > 0){
            return true;
        }
        return false;
    }

}

module.exports= PedidoDAO;