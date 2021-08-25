const assert = require('assert');
const proxyquire = require('proxyquire');
//const { getAllStub, createStub, MongoLibMock  } = require('../utils/mocks/mongoLib');
const { getAllStub, MongoLibMock  } = require('../utils/mocks/mongoLib');
const { moviesMock  } = require('../utils/mocks/movies');

describe('services - movies', ()=>{
    const MoviesServices = proxyquire('../services/movies.js', {
        '../lib/mongo.js': MongoLibMock
    });
    const moviesService = new MoviesServices();
    describe('when getMovies methods is called',async () =>{
        //Primer test
        it('should the getAll Mongolib method', async () =>{
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });
        //Segundo test
        it('should return a array of movies', async () => {
            const result = await moviesService.getMovies({});
            const expected = moviesMock;
            assert.deepEqual(result, expected);
        });
    });
});

