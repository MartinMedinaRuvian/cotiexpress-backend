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
     * Foto del producto
     * @type {string}
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
     * @param {string} foto - Imagen representativa del producto
     * @param {float} precioUnidad - Precio unidad del producto
     * @param {int} codigoCategoria - Código de la categoría con la cual esta relacionado el producto
     */
    constructor (descripcion, foto, precioUnidad, codigoCategoria) {
        this.descripcion = descripcion;
        this.foto = foto;
        this.precioUnidad = precioUnidad;
        this.codigoCategoria = codigoCategoria;
    }
    
}

module.exports=  Producto;