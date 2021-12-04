const VendedorProducto = require('../modelo/VendedorProducto')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'vendedor_producto';

class VendedorProductoDAO{

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

        const {codigoVendedor, codigoProducto} = datos;

        const obj = new VendedorProducto(codigoVendedor, codigoProducto);
        
        const datosGuardar = {
            codigo_vendedor: obj.codigoVendedor,
            codigo_producto: obj.codigoProducto
        }

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
        
        if(guardar.affectedRows > 0){
            return guardar.insertId;
        }

        return -1;
    }

    async eliminar(codigo){
        const obj = new VendedorProducto();
        
        obj.codigo = codigo;

        const eliminar = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE codigo=?', [obj.codigo]);

        if(eliminar.length > 0){
            return true;
        }
        return false;
    }


}

module.exports= VendedorProductoDAO;