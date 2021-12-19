CREATE DATABASE IF NOT EXISTS cotiexpress_bd;

USE cotiexpress_bd;

CREATE TABLE IF NOT EXISTS usuario(
   codigo INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   username CHAR(200) NOT NULL,
   password CHAR(255) NOT NULL,
   tipo CHAR(1) NOT NULL
);

CREATE TABLE IF NOT EXISTS empresa(
   codigo INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   nombre CHAR(200) NOT NULL,
   direccion CHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS vendedor(
   codigo INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   nombres CHAR(100) NOT NULL,
   apellidos CHAR(100) NOT NULL,
   identificacion CHAR(50) NOT NULL,
   telefono CHAR(50),
   email CHAR(200),
   codigo_usuario INT(50) NOT NULL,
   codigo_empresa INT(50) NOT NULL,
   estado CHAR(1) NOT NULL DEFAULT '1',
   CONSTRAINT vendedor_llave_usuario FOREIGN KEY (codigo_usuario) REFERENCES usuario(codigo),
   CONSTRAINT vendedor_llave_empresa FOREIGN KEY (codigo_empresa) REFERENCES empresa(codigo)
);

CREATE TABLE IF NOT EXISTS cliente(
   codigo INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   nombres CHAR(100) NOT NULL,
   apellidos CHAR(100) NOT NULL,
   identificacion CHAR(50) NOT NULL,
   telefono CHAR(50),
   direccion CHAR(200),
   codigo_usuario INT(50) NOT NULL,
   estado CHAR(1) NOT NULL DEFAULT '1',
   CONSTRAINT cliente_llave_usuario FOREIGN KEY (codigo_usuario) REFERENCES usuario(codigo)
);

CREATE TABLE IF NOT EXISTS categoria(
   codigo INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   descripcion CHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS producto(
   codigo INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   descripcion CHAR(200) NOT NULL,
   cantidad INT(20) NOT NULL DEFAULT 1,
   foto CHAR(200) NOT NULL,
   precio_unidad FLOAT NOT NULL,
   codigo_categoria INT(50) NOT NULL,
   CONSTRAINT producto_llave_categoria FOREIGN KEY (codigo_categoria) REFERENCES categoria(codigo)
);

CREATE TABLE IF NOT EXISTS vendedor_producto(
   codigo INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   codigo_vendedor INT(50) NOT NULL,
   codigo_producto INT(50) NOT NULL,
   CONSTRAINT vendedor_producto_llave_vendedor FOREIGN KEY (codigo_vendedor) REFERENCES vendedor(codigo),
   CONSTRAINT vendedor_producto_llave_producto FOREIGN KEY (codigo_producto) REFERENCES producto(codigo)
);

CREATE TABLE IF NOT EXISTS pedido(
   codigo INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   cantidad INT(20) NOT NULL,
   precio_unidad FLOAT NOT NULL
);

CREATE TABLE IF NOT EXISTS pedido_producto(
   codigo INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   codigo_producto INT(50) NOT NULL,
   codigo_pedido INT(50) NOT NULL,
   CONSTRAINT pedido_producto_llave_producto FOREIGN KEY (codigo_producto) REFERENCES producto(codigo),
   CONSTRAINT pedido_producto_llave_pedido FOREIGN KEY (codigo_pedido) REFERENCES pedido(codigo)
);

CREATE TABLE IF NOT EXISTS pedido_vendedor(
   codigo INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   codigo_vendedor INT(50) NOT NULL,
   codigo_pedido INT(50) NOT NULL,
   CONSTRAINT pedido_vendedor_llave_vendedor FOREIGN KEY (codigo_vendedor) REFERENCES vendedor(codigo),
   CONSTRAINT pedido_vendedor_llave_pedido FOREIGN KEY (codigo_pedido) REFERENCES pedido(codigo)
);

CREATE TABLE IF NOT EXISTS pedido_cliente(
   codigo INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   codigo_cliente INT(50) NOT NULL,
   codigo_pedido INT(50) NOT NULL,
   CONSTRAINT pedido_cliente_llave_cliente FOREIGN KEY (codigo_cliente) REFERENCES cliente(codigo),
   CONSTRAINT pedido_cliente_llave_pedido FOREIGN KEY (codigo_pedido) REFERENCES pedido(codigo)
);

CREATE TABLE IF NOT EXISTS factura(
   numero INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   total FLOAT NOT NULL,
   fecha DATE NOT NULL,
   hota CHAR(20),
   codigo_pedido_producto INT(50) NOT NULL,
   codigo_pedido_vendedor INT(50) NOT NULL,
   codigo_pedido_cliente INT(50) NOT NULL,
   CONSTRAINT factura_llave_pedido_producto FOREIGN KEY (codigo_pedido_producto) REFERENCES pedido_producto(codigo),
   CONSTRAINT factura_llave_pedido_vendedor FOREIGN KEY (codigo_pedido_vendedor) REFERENCES pedido_vendedor(codigo),
   CONSTRAINT factura_llave_pedido_cliente FOREIGN KEY (codigo_pedido_vendedor) REFERENCES pedido_cliente(codigo)
);