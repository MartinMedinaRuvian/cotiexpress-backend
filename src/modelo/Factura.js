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
     * @param {string} fecha - Fecha de la factura
     * @param {string} hora - Hora de la factura
     * @param {int} codigoPedidoProducto - Código del pedido producto
     * @param {int} codigoPedidoVendedor - Código del pedido vendedor
     * @param {int} codigoPedidoCliente - Código del pedido cliente
     */
    constructor (fecha, hora, codigoPedidoProducto, codigoPedidoVendedor, codigoPedidoCliente) {
        this.fecha = fecha;
        this.codigoPedidoProducto = codigoPedidoProducto;
        this.codigoPedidoVendedor = codigoPedidoVendedor;
        this.codigoPedidoCliente = codigoPedidoCliente;
    }
    
}

module.exports= Factura;