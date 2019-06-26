import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import PropTypes from 'prop-types';

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: '',
      searchedMovies: undefined,
    };
  }

  componentDidMount = () => {
    this.props.clearErrorCallback();
  };

  getMovies = () => {
    URL = 'http://localhost:3000';
    axios
      .get(URL + '/movies?query=' + this.state.searchTitle)
      .then(response => {
        this.props.clearErrorCallback();
        const movieList = response.data.map(movie => {
          return movie;
        });
        this.setState({
          searchedMovies: movieList,
        });
        if (movieList.length === 0) {
          const errorMessage = 'No movies found.';
          this.props.errorCallback(errorMessage);
        }
      })
      .catch(error => {
        console.log(error.message);
        this.props.errorCallback(error.message);
      });
  };

  onMovieInput = event => {
    const updatedSearch = {};
    updatedSearch[event.target.name] = event.target.value;
    this.setState(updatedSearch);
  };

  findMovie = event => {
    event.preventDefault();
    this.getMovies();
  };

  movieCollection = () => {
    return this.state.searchedMovies.map(movie => {
      return (
        <Movie
          key={movie.id}
          {...movie}
          isSearch={this.state.isSearch}
          addToLibrary={this.props.addToLibrary}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h1>MOVIE SEARCH PLACE HOLDER</h1>

        <form onSubmit={this.findMovie}>
          <label htmlFor="searchTitle">Movie Search: </label>
          <input name="searchTitle" onChange={this.onMovieInput} />

          <input type="submit" name="submit" value="Search Movie" />
        </form>

        {this.state.searchedMovies && this.movieCollection()}
      </div>
    );
  }
}

MovieSearch.propTypes = {
  addToLibrary: PropTypes.func,
};
export default MovieSearch;
