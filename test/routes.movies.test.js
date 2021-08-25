//Se encarga de verificar si es verdad o no la comparación del test
const assert = require('assert');
//Permite llamar a un mock para testear en vez de hacerlo con los datos reales
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', () => {
  const route = proxyquire('../routes/movies', {
    //Indica que la ruta va a ser remplazada por la clase de testeo
    //Cada vez que se llame la ruta quien va a servir de servicio es MoviesServiceMock
    '../services/movies': MoviesServiceMock,
  });
  const request = testServer(route);
  describe('GET movies', () => {
    //Primer test
    it('should respod with status 200', (done) => {
      request.get('/api/movies').expect(200, done);
    });
    //Segundo test
    it('should respond with the list of movies', (done) => {
      request.get('/api/movies').end((err, res) => {
        assert.deepEqual(res.body, {
          data: moviesMock,
          message: 'movies listed',
        });
        done();
      });
    });
  });
});
