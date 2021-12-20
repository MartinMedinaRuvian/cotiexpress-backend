const PedidoProducto = require('../modelo/PedidoProducto')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'pedido_producto';

class PedidoProductoDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async obtenerFiltrado(filtro){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + " WHERE descripcion LIKE '%" + filtro + "%'");
        return datos;
    }

    async guardar(datos){

        const {codigoProducto, codigoPedido} = datos;

        const obj = new PedidoProducto(codigoProducto, codigoPedido);
        
        const datosGuardar = {
            codigo_producto: obj.codigoProducto,
            codigo_pedido: obj.codigoPedido
        }

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
        
        if(guardar.affectedRows > 0){
            return guardar.insertId;
        }

        return -1;
    }

    async eliminar(codigo){
        const obj = new PedidoProducto();
        
        obj.codigo = codigo;

        const eliminar = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE codigo=?', [obj.codigo]);

        if(eliminar.length > 0){
            return true;
        }
        return false;
    }


}

module.exports= PedidoProductoDAO;