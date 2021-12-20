const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const history = require('connect-history-api-fallback');

const app = express();

/**
 * Middlewares
 */
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
/**
 * El history le permite al backend relacionar el modo history de vue para que las rutas se maneje directamente en el front
 */
app.use(history());

/**
 * Configuro la carpeta publica donde va ir todo el frontend
 */
 app.use(express.static(path.join(__dirname, 'publico')))

 /**
  * Configuro carpeta publica y estatica para acceder a las imagenes
  */
  app.use('/imagenes', express.static(path.join(__dirname, 'imagenes')));

/**
 * Importo rutas a usar en el servidor
 */
const vendedorRuta = require('./control/VendedorCtr')
const clienteRuta = require('./control/ClienteCtr')
const usuarioRuta = require('./control/UsuarioCtr')
const categoriaRuta = require('./control/CategoriaCtr')
const productoRuta = require('./control/ProductoCtr')
const subirArchivosRuta = require('./control/SubirArchivosCtr')
const empresaRuta = require('./control/EmpresaCtr')
const vendedorProducto = require('./control/VendedorProductoCtr')
const pedidoRuta = require('./control/PedidoCtr')
const pedidoClienteRuta = require('./control/PedidoClienteCtr')
const pedidoVendedorRuta = require('./control/PedidoVendedorCtr')
const pedidoProductoRuta = require('./control/PedidoProductoCtr')
const facturaRuta = require('./control/FacturaCtr')

/**
 * configuro las rutas del servidor
 */
app.use('/vendedores', vendedorRuta)
app.use('/clientes', clienteRuta)
app.use('/usuarios', usuarioRuta)
app.use('/categorias', categoriaRuta)
app.use('/productos', productoRuta)
app.use('/subir', subirArchivosRuta)
app.use('/empresas', empresaRuta)
app.use('/vendedor-producto', vendedorProducto)
app.use('/pedido', pedidoRuta)
app.use('/pedido-cliente', pedidoClienteRuta)
app.use('/pedido-vendedor', pedidoVendedorRuta)
app.use('/pedido-producto', pedidoProductoRuta)
app.use('/factura', facturaRuta)

module.exports = app;
