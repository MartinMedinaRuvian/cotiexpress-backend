class Factura {

    /**
     * código único para la factura, autogenerado por el gestor de la base de datos Mysql.
     * @type {int}
     */
    numero;
    /**
     * Total de la factura
     * @type {float}
     */
    total;
    /**
     * Fecha de la factura
     * @type {string}
     */
     fecha;
    /**
     * Hora de la factura
     * @type {string}
     */
    hora;
    /**
     * Código del pedido producto
     * @type {int}
     */
     codigoPedidoProducto;
    /**
     * Código del pedido vendedor
     * @type {int}
     */
     codigoPedidoVendedor;
    /**
     * Código del pedido cliente
     * @type {int}
     */
     codigoPedidoCliente;


    /**
     * 
     * @param {float} total 
     * @param {int} codigoPedidoProducto 
     * @param {int} codigoPedidoVendedor 
     * @param {int} codigoPedidoCliente 
     */
    constructor (total, codigoPedidoProducto, codigoPedidoVendedor, codigoPedidoCliente) {
        this.total = total;
        this.codigoPedidoProducto = codigoPedidoProducto;
        this.codigoPedidoVendedor = codigoPedidoVendedor;
        this.codigoPedidoCliente = codigoPedidoCliente;
    }
    
}

module.exports= Factura;