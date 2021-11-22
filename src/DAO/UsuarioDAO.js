const Usuario = require('../modelo/Usuario')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'usuario';

class UsuarioDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async yaExiste(username){
        const obj = new Usuario();
        
        obj.username = username;

        const yaExiste = await conexion.query('SELECT username FROM ' + nombreTabla + ' WHERE username=?', [obj.username]);
        
        if(yaExiste.length > 0){
            return true;
        }
        return false;
    }

    async guardar(datos){

        const {username, password, tipo} = datos;

        const obj = new Usuario(username, password, tipo);
        
        const datosGuardar = {
            username: obj.username,
            password: obj.password,
            tipo: obj.tipo
        }

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
        
        if(guardar.affectedRows > 0){
            return guardar.insertId;
        }

        return -1;
    }

    async verificarUsuario(username){
        const obj = new Usuario();
        
        obj.username = username;

        const dato = await conexion.query('SELECT * FROM ' + nombreTabla + ' WHERE username=?', [obj.username]);

        if(dato.length > 0){
            return dato;
        }
        return [];
    }

}

module.exports= UsuarioDAO;