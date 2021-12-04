class VendedorProducto {

    /**
     * código único para la categoría, autogenerado por el gestor de la base de datos Mysql.
     * @type {int}
     */
    codigo;
    /**
     * Código del producto
     * @type {int}
     */
    codigoVendedor;
    /**
     * Código del producto
     * @type {int}
     */
    codigoProducto;

    /**
     * 
     * @param {int} codigoVendedor 
     * @param {int} codigoProducto 
     */
    constructor (codigoVendedor, codigoProducto) {
        this.codigoVendedor = codigoVendedor;
        this.codigoProducto = codigoProducto;
    }
    
}

module.exports= VendedorProducto;