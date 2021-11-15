class Vendedor {

    codigo;
    nombres;
    apellidos;
    identificacion;
    telefono;
    email;
    codigo_usuario;
    codigo_empresa;

    constructor (nombres, apellidos, identificacion, telefono, email, codigo_usuario, codigo_empresa) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.identificacion = identificacion;
        this.telefono = telefono;
        this.email = email;
        this.codigo_usuario = codigo_usuario;
        this.codigo_empresa = codigo_empresa;
    }

}

module.exports= Vendedor;