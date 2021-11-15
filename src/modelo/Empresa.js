class Empresa {

    codigo;
    nombre;
    foto;
    direccion;

    constructor (codigo, nombre, foto, direccion) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.foto = foto;
        this.direccion = direccion;
    }
    
}

module.exports= Empresa;