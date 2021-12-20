class PedidoCliente {

    /**
     * código único para pedido cliente, autogenerado por el gestor de la base de datos Mysql.
     * @type {int}
     */
    codigo;
    /**
     * Código del cliente
     * @type {int}
     */
    codigoCliente;
    /**
     * Código del pedido
     * @type {int}
     */
    codigoPedido;

    /**
     * 
     * @param {int} codigoCliente 
     * @param {int} codigoPedido
     */
    constructor (codigoCliente, codigoPedido) {
        this.codigoCliente = codigoCliente;
        this.codigoPedido = codigoPedido;
    }
    
}

module.exports= PedidoCliente;