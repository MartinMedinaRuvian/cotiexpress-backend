class Cliente {

    codigo;
    nombres;
    apellidos;
    identificacion;
    telefono;
    email;
    codigo_usuario;

    constructor (nombres, apellidos, identificacion, telefono, email, codigo_usuario) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.identificacion = identificacion;
        this.telefono = telefono;
        this.email = email;
        this.codigo_usuario = codigo_usuario;
    }

}

module.exports= Cliente;