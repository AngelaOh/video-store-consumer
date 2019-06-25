
import React from 'react'
import Movie from './Movie'
import axios from 'axios';

class MovieLibrary extends React.Component {

    constructor() {
        super();
        this.state = {
            movieList: []
        }
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        URL = 'http://localhost:3000'
        axios.get( URL + '/movies' ) 
        .then((response) => {
            const movieList = response.data.map((movie) => {
                return movie
            });
    
            this.setState ({
                movieList: movieList
            });
        })
        .catch((error) => {
            return console.log(error.message);
        });
    };

    selectMovie = (movie) => {
        this.props.selectMovie(movie)
    }

    movieCollection = () => {
        return (
        this.state.movieList.map((movie) => {
            return (
                < Movie 
                movie={movie} 
                selectMovie={this.selectMovie} />
            )
        })
        )
    }

    render() {      
        return <div>{this.movieCollection()}</div>;
    }
}

export default MovieLibrary 
