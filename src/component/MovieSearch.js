import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie'

class MovieSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTitle: '',
      searchedMovies: undefined
    }
  }

getMovies = () => {
  URL = 'http://localhost:3000'
  console.log('inside axios', this.state.searchTitle)
  axios.get( URL + '/movies?query=' + this.state.searchTitle ) 
  .then((response) => {
      const movieList = response.data.map((movie) => {
          return movie
      });

      this.setState ({
          searchedMovies: movieList
      });
  })
  .catch((error) => {
      return console.log(error.message);
  });
};

  onMovieInput = (event) => {
    const updatedSearch = {}
    updatedSearch[event.target.name] = event.target.value
    this.setState(updatedSearch)
  }

  findMovie = (event) => {
    event.preventDefault();
    this.getMovies()
    console.log('inside find movie', this.state.searchedMovies) 

  }

  movieCollection = () => {
    console.log('inside movieCollection: ', this.state.searchedMovies)
    return (
    this.state.searchedMovies.map((movie) => {
        return (
            < Movie 
            key={movie.id}
            {...movie} />
        )
    })
    )
  }

  render() {
    return (
      <div>
        <h1>MOVIE SEARCH PLACE HOLDER</h1>

        <form onSubmit={this.findMovie}>
          <label htmlFor='searchTitle'>Movie Search: </label>
           <input  
            name="searchTitle" 
            onChange={this.onMovieInput} />
          
          <input
            type='submit'
            name='submit'
            value='Search Movie' />
        </form>

        {this.searchedMovies && this.movieCollection()}

      </div>
    )
  }
};

export default MovieSearch;
