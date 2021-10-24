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

        const {username, password} = datos;

        const obj = new Usuario(username, password);
        
        const datosGuardar = {
            username: obj.username,
            password: obj.password
        }

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
        
        if(guardar.affectedRows > 0){
            return true;
        }

        return false;
    }

    async verificarInicioSesion(username, password){
        const obj = new Usuario();
        
        obj.username = username;
        obj.password = password;

        const correcto = await conexion.query('SELECT username FROM ' + nombreTabla + ' WHERE username=? AND password=?', [obj.username, obj.password]);

        if(correcto.length > 0){
            return true;
        }
        return false;
    }

}

module.exports= UsuarioDAO;