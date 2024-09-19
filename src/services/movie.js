const { fetchMovies } = require("../model/movie");


class MovieService{
    constructor(fetchMovies){
        this.fetchMovies = fetchMovies
    }

    async fetchMoviesByMovieName(movieName){
        return this.fetchMovies(movieName)
    }
}


module.exports = new MovieService(fetchMovies)