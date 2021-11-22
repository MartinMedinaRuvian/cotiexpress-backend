class Cliente {

    codigo;
    nombres;
    apellidos;
    identificacion;
    telefono;
    direccion;
    codigoUsuario;

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