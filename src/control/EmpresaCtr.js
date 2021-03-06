const express = require('express');
const rutas = express.Router();

const EmpresaDAO = require('../DAO/EmpresaDAO');

rutas.get('/', async(req, res) =>{
   const dao = new EmpresaDAO();
   try {
      const datos = await dao.obtenerTodos();
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

rutas.get('/filtro-codigo/:codigo', async(req, res) =>{
   const { codigo } = req.params
   const dao = new EmpresaDAO();
   try {
      const datos = await dao.buscarPorCodigo(codigo);
      res.status(200).json(datos[0]);
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

rutas.get('/:filtro-codigo', async(req, res) =>{
   const { filtro } = req.params
   const dao = new EmpresaDAO();
   try {
      const datos = await dao.obtenerFiltrado(filtro);
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

rutas.post('/', async (req, res)=>{
   const datos = req.body;
   console.log(datos, 'EMPRESA GUARDAR')
   const dao = new EmpresaDAO();  
   try {  
      if(datos.nombre !== undefined){
         const yaExiste = await dao.yaExiste(datos.nombre);
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
   const dao = new EmpresaDAO();
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

   const dao = new EmpresaDAO();
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