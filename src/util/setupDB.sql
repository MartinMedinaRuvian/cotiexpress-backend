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
   foto CHAR(200) NOT NULL,
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
   CONSTRAINT cliente_llave_usuario FOREIGN KEY (codigo_usuario) REFERENCES usuario(codigo)
);

CREATE TABLE IF NOT EXISTS categoria(
   codigo INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   descripcion CHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS producto(
   codigo INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   descripcion CHAR(200) NOT NULL,
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
