class Categoria {

    /**
     * código único para la categoría, autogenerado por el gestor de la base de datos Mysql.
     * @type {int}
     */
    codigo;
    /**
     * Descripción de la categoría
     * @type {string}
     */
    descripcion;

    /**
     * 
     * @param {string} descripcion - Descripción de la categoría
     */
    constructor (descripcion) {
        this.descripcion = descripcion;
    }
    
}

module.exports= Categoria;