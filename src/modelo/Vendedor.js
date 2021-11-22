class Vendedor {

    codigo;
    nombres;
    apellidos;
    identificacion;
    telefono;
    email;
    codigoUsuario;
    codigoEmpresa;

    constructor (nombres, apellidos, identificacion, telefono, email, codigoUsuario, codigoEmpresa) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.identificacion = identificacion;
        this.telefono = telefono;
        this.email = email;
        this.codigoUsuario = codigoUsuario;
        this.codigoEmpresa = codigoEmpresa;
    }

}

module.exports= Vendedor;