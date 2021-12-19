class Vendedor {

    /**
     * código único para el vendedor, autogenerado por el gestor de la base de datos Mysql.
     * @type {int}
     */
    codigo;
    /**
     * Nombres completos del vendedor
     * @type {string}
     */
    nombres;
    /**
     * Apellidos completos del vendedor
     * @type {string}
     */
    apellidos;
    /**
     * Identificación del vendedor, debe ser única
     * @type {string}
     */
    identificacion;
     /**
     * Email del vendedor, donde es su domicilio
     * @type {string}
     */
    email;
    /**
     * Código del usuario, el cual usa el vendedor para relacionarse con el usuario con el que ingresa al aplicativo
     * @type {int}
     */
    codigoUsuario;
    /**
     * Código de la empresa, el cual usa el vendedor para relacionarse con una empresa
     * @type {int}
     */
    codigoEmpresa;

    /**
     * 
     * @param {string} nombres - Nombres del vendedor
     * @param {string} apellidos - Apellidos del vendedor
     * @param {string} identificacion - Identificación del vendedor
     * @param {string} email - Email del vendedor
     * @param {int} codigoUsuario - Código del usuario con el que esta relacionado el vendedor
     * @param {int} codigoEmpresa - Código de la empresa con la que esta relacionado el vendedor
     */
    constructor (nombres, apellidos, identificacion, email, codigoUsuario, codigoEmpresa) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.identificacion = identificacion;
        this.email = email;
        this.codigoUsuario = codigoUsuario;
        this.codigoEmpresa = codigoEmpresa;
    }

}

module.exports= Vendedor;