class PedidoProducto {

    /**
     * código único para pedido cliente, autogenerado por el gestor de la base de datos Mysql.
     * @type {int}
     */
    codigo;
    /**
     * Código del Producto
     * @type {int}
     */
    codigoProducto;
    /**
     * Código del pedido
     * @type {int}
     */
    codigoPedido;

    /**
     * 
     * @param {int} codigoProducto
     * @param {int} codigoPedido
     */
    constructor (codigoProducto, codigoPedido) {
        this.codigoProducto = codigoProducto;
        this.codigoPedido = codigoPedido;
    }
    
}

module.exports= PedidoProducto;