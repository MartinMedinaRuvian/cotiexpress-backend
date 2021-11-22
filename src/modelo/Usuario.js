class Cliente {

    codigo;
    username;
    password;
    tipo;

    constructor (username, password, tipo) {
        this.username = username;
        this.password = password;
        this.tipo = tipo;
    }
    
}

module.exports= Cliente;