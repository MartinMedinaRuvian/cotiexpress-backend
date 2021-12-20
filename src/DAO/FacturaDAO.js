const Factura = require('../modelo/Factura')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'factura';

class FacturaDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async obtenerFiltrado(filtro){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + " WHERE descripcion LIKE '%" + filtro + "%'");
        return datos;
    }

    async yaExiste(descripcion){
        const obj = new Factura();
        
        obj.descripcion = descripcion;

        const yaExiste = await conexion.query('SELECT descripcion FROM ' + nombreTabla + ' WHERE descripcion=?', [obj.descripcion]);

        if(yaExiste.length > 0){
            return true;
        }
        return false;
    }

    async guardar(datos){

        const {total, codigoPedidoProducto, codigoPedidoVendedor, codigoPedidoCliente} = datos;

        const obj = new Factura(total, codigoPedidoProducto, codigoPedidoVendedor, codigoPedidoCliente);
        
        let fecha= new Date();
        let hora = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();

        const datosGuardar = {
            total: obj.total,
            fecha: fecha,
            hora: hora,
            codigo_pedido_producto: obj.codigoPedidoProducto,
            codigo_pedido_vendedor: obj.codigoPedidoVendedor,
            codigo_pedido_cliente: obj.codigoPedidoCliente
        }
        console.log(datosGuardar, 'FACTURA GUARDAR')

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
        
        if(guardar.affectedRows > 0){
            return guardar.insertId;
        }

        return -1;
    }

    async eliminar(codigo){
        const obj = new Factura();
        
        obj.codigo = codigo;

        const eliminar = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE codigo=?', [obj.codigo]);

        if(eliminar.length > 0){
            return true;
        }
        return false;
    }

    async actualizar(codigo, datos){
        const obj = new Factura();
 
        obj.codigo = codigo;

        const actualizar = await conexion.query('UPDATE ' + nombreTabla + ' SET ? WHERE codigo=?', [datos,  obj.codigo]);
        if(actualizar.length > 0){
            return true;
        }
        return false;
    }

}

module.exports= FacturaDAO;