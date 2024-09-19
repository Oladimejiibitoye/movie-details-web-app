
const { StatusCodes } = require("http-status-codes");
const MovieService = require("../services/movie");

class MoviesController {
  async renderMoviesSearchPage(req, res, next) {
    try {
      res.render('movies-input', {
        path: '/'
      })
    } catch (error) {
      next(error);
    }
  }

  async searchMovieByMovieName(req, res, next) {
    try {
        const movieName = req.body.movie_name;
        const data = await MovieService.fetchMoviesByMovieName(movieName)
        res.render('movies', { movie: data })
    } catch (error) {
        next(error)
    }
  }
    

}

module.exports = new MoviesController();