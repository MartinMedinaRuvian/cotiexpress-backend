class Producto {

    /**
     * código único para el producto, autogenerado por el gestor de la base de datos Mysql.
     * @type {int}
     */
    codigo;
    /**
     * Descripción del producto
     * @type {string}
     */
    descripcion;
    /**
     * Cantidad del producto
     * @type {string}
     */
     cantidad;
    /**
     * Foto del producto
     * @type {int}
     */
    foto;
    /**
     * Precio unidad del producto
     * @type {float}
     */
    precioUnidad;
    /**
     * Código de la categoría con la cual esta relacionado el producto
     * @type {int}
     */
    codigoCategoria;

    /**
     * 
     * @param {string} descripcion  - Descripción del producto
     * @param {int} cantidad  - Cantidad del producto
     * @param {string} foto - Imagen representativa del producto
     * @param {float} precioUnidad - Precio unidad del producto
     * @param {int} codigoCategoria - Código de la categoría con la cual esta relacionado el producto
     */
    constructor (descripcion, cantidad, foto, precioUnidad, codigoCategoria) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.foto = foto;
        this.precioUnidad = precioUnidad;
        this.codigoCategoria = codigoCategoria;
    }
    
}

module.exports=  Producto;