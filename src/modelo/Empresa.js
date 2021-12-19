class Empresa {

    /**
     * Código de la empresa, es un código único autogenerado por el motor de la base de datos Mysql
     * @type {int}
     */
    codigo;
    /**
     * Nombre de la empresa
     * @type {string}
     */
    nombre;
    /**
     * Dirección de la empresa, donde esta localizada la empresa
     * @type {string}
     */
    direccion;
    /**
     * Telefono de la empresa
     * @type {string}
     */
     telefono;

    /**
     * 
     * @param {string} nombre - Nombre de la empresa
     * @param {string} direccion - Dirección de la empresa
     * @param {string} telefono - telefono de la empresa
     */
    constructor (nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    
}

module.exports= Empresa;