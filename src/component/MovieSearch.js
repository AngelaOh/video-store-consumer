import React, { Component } from 'react';
import Axios from 'axios';

const getMovies = () => {
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

const MovieSearch = () => {
  return (
    <div>
      <h1>MOVIE SEARCH PLACE HOLDER</h1>
      {getMovies()}
    </div>
  )
};

export default MovieSearch;
