class Cliente {

    /**
     * codigo único para el usuario, autogenerado por el gestor de la base de datos Mysql.
     * @type {int}
     */
    codigo;
    /**
     * Nombre del usuario para ingresar a la aplicación. 
     * @type {string}
     */
    username;
    /**
     * Contraseña del usuario para ingresar a la aplicación. 
     * @type {string}
     */
    password;
    /**
     *  El tipo es para identificar los roles correspondientes con el que se registra un usuario, existen 3 tipos:
     *  TIPO 1: CLIENTE
     *  TIPO 2: VENDEDOR
     *  TIPO 3: ADMIN
     * @type {string}
     */
    tipo;

    /**
     * 
     * @param {string} username - Nombre del usuario 
     * @param {string} password - Contraseña del usuario 
     * @param {string} tipo - El tipo de usuario correpondiente
     */
    constructor (username, password, tipo) {
        this.username = username;
        this.password = password;
        this.tipo = tipo;
    }
    
}

module.exports= Cliente;