const express = require('express');
const rutas = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UsuarioDAO = require('../DAO/UsuarioDAO');

rutas.get('/', async(req, res) =>{
   const dao = new UsuarioDAO();
   try {
      const datos = await dao.obtenerTodos();
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error});
   }
});

rutas.post('/', async(req, res)=>{
   const dato = {
      username: req.body.username,
      tipo: req.body.tipo
    }
    try {
      dato.password = bcrypt.hashSync(req.body.password, saltRounds);      
      const dao = new UsuarioDAO();
      const yaExiste = await dao.yaExiste(dato.username);
      if(yaExiste){
         res.status(500).json({mensaje:'Ya existe'});
      }else{
         const idUsuarioGuardar = await dao.guardar(dato);
         if(idUsuarioGuardar > -1){
            res.status(200).json({codigo: idUsuarioGuardar});
         }
      }  
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ocurrio un error'
      });
    } 
});

rutas.post('/inicioSesion', async (req, res)=>{
   const dato = req.body;
   const dao = new UsuarioDAO();
   try {
      const usuario = await dao.verificarUsuario(dato.username);
      if(usuario.length > 0){
         if(!bcrypt.compareSync(dato.password, usuario[0].password)){
            res.status(400).json({mensaje:'Contraseña incorrecta'});
         }else{
            res.status(200).json(usuario[0]);
         }
      }else{
         res.status(500).json({mensaje: 'Usuario incorrecto'});
      }
   } catch (error) {
      res.status(500).json({mensaje:error});
   }
});

module.exports = rutas;