// controllers/movieController.js
const movieService = require('../services/movieService');

async function listMovies(req, res, next) {
  try {
    const { name, year, genre } = req.query;
    let movies;
    if (name || year || genre) {
      movies = await movieService.searchMovies({ name, year, genre });
    } else {
      movies = await movieService.getAllMovies();
    }
    if (!movies.length) {
      return res.status(404).json({ error: 'No se encontraron resultados para la búsqueda.' });
    }
    res.json(movies);
  } catch (err) {
    next(err);
  }
}

async function getMovie(req, res, next) {
  try {
    const movie = await movieService.getMovieByIdOrTitle(req.params.id_or_name);
    if (!movie) {
      return res.status(404).json({ error: 'No se encontraron resultados para la búsqueda.' });
    }
    res.json(movie);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listMovies,
  getMovie
};
