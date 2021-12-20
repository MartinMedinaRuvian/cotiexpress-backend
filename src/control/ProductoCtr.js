const express = require('express');
const rutas = express.Router();

const ProductoDAO = require('../DAO/ProductoDAO');

rutas.get('/', async(req, res) =>{
   const dao = new ProductoDAO();
   try {
      const datos = await dao.obtenerTodos();
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

rutas.get('/:filtro', async(req, res) =>{
   const { filtro } = req.params
   const dao = new ProductoDAO();
   try {
      const datos = await dao.obtenerFiltrado(filtro);
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

rutas.get('/filtro-vendedor/:codigo_vendedor', async(req, res) =>{
   const {codigo_vendedor} = req.params
   const dao = new ProductoDAO();
   try {
      const datos = await dao.filtrarPorVendedor(codigo_vendedor);
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error});
   }
});

rutas.get('/filtro-empresa/:codigo_empresa', async(req, res) =>{
   const {codigo_empresa} = req.params
   const dao = new ProductoDAO();
   try {
      const datos = await dao.filtrarPorCodigoEmpresa(codigo_empresa);
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error});
   }
});

rutas.post('/filtro-categoria/:codigo_categoria', async(req, res) =>{
   const {codigo_categoria} = req.params
   const {descripcion} = req.body
   const dao = new ProductoDAO();
   try {
      const datos = await dao.filtrarPorCategoria(codigo_categoria, descripcion);
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error});
   }
});

rutas.post('/', async (req, res)=>{
   const datos = req.body;
   console.log(datos)
   const dao = new ProductoDAO();  
   try {  
      if(datos.descripcion !== undefined){
         const yaExiste = await dao.yaExiste(datos.descripcion);
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
   const dao = new ProductoDAO();
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

   const dao = new ProductoDAO();
   try {
      const respuesta = await dao.actualizar(codigo, datos);
      if(respuesta){
         res.status(200).json({mensaje:'Información actualizada satisfactoreamente'});
      }else{
         res.status(400).json({mensaje:'Ocurrio algo'})
      }
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
});

module.exports = rutas;