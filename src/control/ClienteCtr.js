const express = require('express');
const rutas = express.Router();

const ClienteDAO = require('../DAO/ClienteDAO');

rutas.get('/', async(req, res) =>{
   const dao = new ClienteDAO();
   try {
      const datos = await dao.obtenerTodos();
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

rutas.get('/:filtro', async(req, res) =>{
   const { filtro } = req.params
   const dao = new ClienteDAO();
   try {
      const datos = await dao.obtenerFiltrado(filtro);
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

rutas.post('/', async (req, res)=>{
   const datos = req.body;
   const dao = new ClienteDAO();  
   try {  
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
   const dao = new ClienteDAO();
   try {
      const datos = await dao.eliminar(codigo);
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

rutas.put('/:codigo', async(req, res) =>{
   const {codigo} = req.params;
   const datos = req.body;

   const dao = new ClienteDAO();
   try {
      const respuesta = await dao.actualizar(codigo, datos);
      res.status(200).json(respuesta);
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

module.exports = rutas;