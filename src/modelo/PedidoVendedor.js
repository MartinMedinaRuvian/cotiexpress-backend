class PedidoVendedor {

    /**
     * código único para pedido cliente, autogenerado por el gestor de la base de datos Mysql.
     * @type {int}
     */
    codigo;
    /**
     * Código del vendedor
     * @type {int}
     */
    codigoVendedor;
    /**
     * Código del pedido
     * @type {int}
     */
    codigoPedido;

    /**
     * 
     * @param {int} codigoVendedor
     * @param {int} codigoPedido
     */
    constructor (codigoVendedor, codigoPedido) {
        this.codigoVendedor = codigoVendedor;
        this.codigoPedido = codigoPedido;
    }
    
}

module.exports= PedidoVendedor;