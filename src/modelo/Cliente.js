class Cliente {

    /**
     * código único para el cliente, autogenerado por el gestor de la base de datos Mysql.
     * @type {int}
     */
    codigo;
    /**
     * Nombres completos del cliente
     * @type {string}
     */
    nombres;
    /**
     * Apellidos completos del cliente
     * @type {string}
     */
    apellidos;
    /**
     * Identificación del cliente, debe ser única
     * @type {string}
     */
    identificacion;
     /**
     * Teléfono del cliente
     * @type {string}
     */
    telefono;
     /**
     * Dirección del cliente, donde es su domicilio
     * @type {string}
     */
    direccion;
    /**
     * Código del usuario, el cual usa el cliente para relacionarse con el usuario con el que ingresa al aplicativo
     * @type {int}
     */
    codigoUsuario;

    /**
     * 
     * @param {string} nombres - Nombres del cliente
     * @param {string} apellidos - Apellidos del cliente
     * @param {string} identificacion - Identificación del cliente
     * @param {string} telefono - Teléfono del cliente
     * @param {string} direccion - Dirección del cliente
     * @param {int} codigoUsuario - Código del usuario, relación del usuario correspondiente
     */
    constructor (nombres, apellidos, identificacion, telefono, direccion, codigoUsuario) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.identificacion = identificacion;
        this.telefono = telefono;
        this.direccion = direccion;
        this.codigoUsuario = codigoUsuario;
    }

}

module.exports= Cliente;