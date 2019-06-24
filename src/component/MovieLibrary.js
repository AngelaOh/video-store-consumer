
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
        URL = 'http://localhost:3000'

        axios.get( URL + '/movies' ) 
        .then((response) => {
            const movieList = response.data.map((movie) => {
                return (
                    movie
                )
            })
    
            this.setState ({
                movieList: movieList
            })

            console.log('state!', this.state)
        })
        .catch((error) => {
            return (
                console.log(error.message)
            )
        })

    }

    selectMovie = () => {
        this.props.selectMovie()
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

        return (
            <div>
              {this.movieCollection()}
            </div>
        )
    }
}

export default MovieLibrary 
