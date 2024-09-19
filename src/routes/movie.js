const path = require('path');

const express = require('express');

const MoviesController = require('../controllers/movie');

const router = express.Router();

router.get('/', MoviesController.renderMoviesSearchPage);
router.post('/movies', MoviesController.searchMovieByMovieName)

module.exports = router;