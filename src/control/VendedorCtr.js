const express = require('express');
const rutas = express.Router();

const VendedorDAO = require('../DAO/VendedorDAO');

rutas.get('/', async(req, res) =>{
   const dao = new VendedorDAO();
   try {
      const datos = await dao.obtenerTodos();
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

rutas.get('/:codigo_usuario', async(req, res) =>{
   const {codigo_usuario} = req.params
   console.log(codigo_usuario)
   const dao = new VendedorDAO();
   try {
      const datos = await dao.obtener(codigo_usuario);
      res.status(200).json(datos[0]);
   } catch (error) {
      res.status(500).json({mensaje:error});
   }
});

rutas.get('/buscar-empresa/:codigo_usuario', async(req, res) =>{
   const {codigo_usuario} = req.params
   console.log(codigo_usuario)
   const dao = new VendedorDAO();
   try {
      const datos = await dao.buscarEmpresaPorUsuario(codigo_usuario);
      res.status(200).json(datos[0]);
   } catch (error) {
      res.status(500).json({mensaje:error});
   }
});

rutas.post('/', async (req, res)=>{
   const datos = req.body;
   console.log(datos, 'DATOS QUE LLEGAN')
   try {  
         const dao = new VendedorDAO();
         if(datos.identificacion !== undefined){
            const yaExiste = await dao.yaExiste(datos.identificacion);
            if(yaExiste){
               res.status(500).json({mensaje:'Ya existe'});
            }else{
               const codigoDatoGuardado = await dao.guardar(datos);  
               if(codigoDatoGuardado !== -1){
                  res.status(200).json({
                     codigo: codigoDatoGuardado
                  });
               }
            }
         }else{
            res.status(500).json({mensaje:'Ingrese los datos'});
         }
   } catch (error) {
      res.status(500).json({mensaje:error});
   }
});

rutas.delete('/:codigo', async(req, res) =>{
   const {codigo} = req.params;
   const dao = new VendedorDAO();
   try {
      const datos = await dao.eliminar(codigo);
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

rutas.post('/cambiar-estado', async(req, res) =>{
   const dato = req.body;
   const dao = new VendedorDAO();
   try {
      const correcto = await dao.cambiarEstado(dato);
      if(correcto){
         res.status(200).json({mensaje:'Actualizado correctamente'});
      }
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

rutas.put('/:codigo', async(req, res) =>{
   const {codigo} = req.params;
   const datos = req.body;

   const dao = new VendedorDAO();
   try {
      const correcto = await dao.actualizar(codigo, datos);
      if(correcto){
         res.status(200).json({mensaje:'Actualizado correctamente'});
      }
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

module.exports = rutas;