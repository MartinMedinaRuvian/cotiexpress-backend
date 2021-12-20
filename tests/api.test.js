const request = require('supertest');

const server = require('../src/server');

/**
 * Test del endpoint que trae todos los usuarios
 */
describe("GET /usuarios", ()=>{
    it('Responde con un json que contiene una lista de todos los usuarios', done => {
        request(server)
            .get('/usuarios')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});

/**
 * Test del endpoint que trae todos las personas
 */
describe("GET /clientes", ()=>{
    it('Responde con un json que contiene una lista de todos los clientes', done => {
        request(server)
            .get('/clientes')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});

/**
 * Test del endpoint que trae todos los productos
 */
describe("GET /productos", ()=>{
    it('Responde con un json que contiene una lista de todos los productos', done => {
        request(server)
            .get('/productos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});

/**
 * Test del endpoint que trae todas las categorías
 */
 describe("GET /categorias", ()=>{
    it('Responde con un json que contiene una lista de todos las categorías', done => {
        request(server)
            .get('/categorias')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
});

