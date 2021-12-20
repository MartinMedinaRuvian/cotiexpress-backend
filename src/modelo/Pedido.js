class Pedido {

    /**
     * código único para el pedido, autogenerado por el gestor de la base de datos Mysql.
     * @type {int}
     */
    codigo;
    /**
     * Cantidad del pedido
     * @type {int}
     */
    cantidad;
    /**
     * Precio unidad del pedido
     * @type {float}
     */
     precioUnidad;

    /**
     * 
     * @param {int} cantidad - Cantidad del pedido
     * @param {float} precioUnidad - Precio unidad del pedido
     */
    constructor (cantidad, precioUnidad) {
        this.cantidad = cantidad;
        this.precioUnidad = precioUnidad;
    }
    
}

module.exports= Pedido;