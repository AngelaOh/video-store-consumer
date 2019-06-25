
import React from 'react'
import Movie from './Movie'
import axios from 'axios';

class MovieLibrary extends React.Component {

    constructor(props) {
        super(props);
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

    movieCollection = () => {
        return (
        this.state.movieList.map((movie) => {
            return (
                < Movie 
                {...movie} 
                selectMovie={this.props.selectMovie} />
            )
        })
        )
    }

    render() {      
        return <div>{this.movieCollection()}</div>;
    }
}

export default MovieLibrary 
