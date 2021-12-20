const PedidoCliente = require('../modelo/PedidoCliente')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'pedido_cliente';

class PedidoClienteDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async obtenerFiltrado(filtro){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + " WHERE descripcion LIKE '%" + filtro + "%'");
        return datos;
    }

    async yaExiste(codigoVendedor, codigoProducto){

        const yaExiste = await conexion.query('SELECT codigo FROM ' + nombreTabla + ' WHERE codigo_vendedor=? AND codigo_producto=?', [codigoVendedor, codigoProducto]);

        if(yaExiste.length > 0){
            return true;
        }
        return false;
    }

    async guardar(datos){

        const {codigoCliente, codigoPedido} = datos;

        const obj = new PedidoCliente(codigoCliente, codigoPedido);
        
        const datosGuardar = {
            codigo_cliente: obj.codigoCliente,
            codigo_pedido: obj.codigoPedido
        }

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
        
        if(guardar.affectedRows > 0){
            return guardar.insertId;
        }

        return -1;
    }

    async eliminar(codigo){
        const obj = new PedidoCliente();
        
        obj.codigo = codigo;

        const eliminar = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE codigo=?', [obj.codigo]);

        if(eliminar.length > 0){
            return true;
        }
        return false;
    }


}

module.exports= PedidoClienteDAO;