const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  //Lista todas las peliculas
  router.get('/', async function (request, response, next) {
    //destructuramos el query que viene de la ruta
    const { tags } = request.query;
    try {
      const movies = await moviesService.getMovies({ tags });

      response.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (error) {
      next(error);
    }
  });
  //Lista solo una pelicula
  router.get('/:movieId', async function (request, response, next) {
    //destructuramos el parametro movieID que viene de la ruta
    const { movieId } = request.params;
    try {
      const movie = await moviesService.getMovie({ movieId });

      response.status(200).json({
        data: movie,
        message: 'movie retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  //Crea una pelicula
  router.post('/', async function (request, response, next) {
    // recibimos los datos que vienen de body y colocamos un alias "dataMovie"
    const { body: movie } = request;
    try {
      const createMovieAddId = await moviesService.createMovie({ movie });

      response.status(201).json({
        data: createMovieAddId,
        message: 'movie created',
      });
    } catch (error) {
      next(error);
    }
  });

  //Actualiza toda la pelicula
  router.put('/:movieId', async function (request, response, next) {
    //destructuramos el parametro movieID que viene de la ruta
    const { movieId } = request.params;
    // recibimos los datos que vienen de body y colocamos un alias "dataMovie"
    const { body: movie } = request;
    try {
      const updatedMovieAddId = await moviesService.updateMovie({
        movieId,
        movie,
      });

      response.status(200).json({
        data: updatedMovieAddId,
        message: 'movie updated',
      });
    } catch (error) {
      next(error);
    }
  });

  //Elimina una pelicula
  router.delete('/:movieId', async function (request, response, next) {
    //destructuramos el parametro movieID que viene de la ruta
    const { movieId } = request.params;
    try {
      const deletedMovieAddId = await moviesService.deleteMovie({ movieId });

      response.status(201).json({
        data: deletedMovieAddId,
        message: 'movie deleted',
      });
    } catch (error) {
      next(error);
    }
  });

  //Actualiza parte de una pelicula
  router.patch('/:movieId', async function (request, response, next) {
    //destructuramos el parametro movieID que viene de la ruta
    const { movieId } = request.params;
    // recibimos los datos que vienen de body y colocamos un alias "dataMovie"
    const { body: movie } = request;
    try {
      const updatedPartialMovieAddId = await moviesService.updatePartialMovie({
        movieId,
        movie,
      });
      response.status(200).json({
        data: updatedPartialMovieAddId,
        message: 'movie partial updated',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
