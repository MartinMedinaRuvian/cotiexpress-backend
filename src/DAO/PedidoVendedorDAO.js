const PedidoVendedor = require('../modelo/PedidoVendedor')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'pedido_vendedor';

class PedidoVendedorDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async obtenerFiltrado(filtro){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + " WHERE descripcion LIKE '%" + filtro + "%'");
        return datos;
    }

    async guardar(datos){

        const {codigoEmpresa, codigoPedido} = datos;

        const codigoVendedor = await conexion.query("SELECT codigo FROM vendedor WHERE codigo_empresa = ?", [codigoEmpresa]);

        const codigoVendedorGuardar = codigoVendedor[0].codigo;

        const obj = new PedidoVendedor(codigoVendedorGuardar, codigoPedido);
        
        const datosGuardar = {
            codigo_vendedor: obj.codigoVendedor,
            codigo_pedido: obj.codigoPedido
        }

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
        
        if(guardar.affectedRows > 0){
            return guardar.insertId;
        }

        return -1;
    }

    async eliminar(codigo){
        const obj = new PedidoVendedor();
        
        obj.codigo = codigo;

        const eliminar = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE codigo=?', [obj.codigo]);

        if(eliminar.length > 0){
            return true;
        }
        return false;
    }


}

module.exports= PedidoVendedorDAO;