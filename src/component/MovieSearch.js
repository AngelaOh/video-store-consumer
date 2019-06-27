import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import PropTypes from 'prop-types';
import './MovieList.css';

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
    this.props.hideWelcomeCallback();
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
        <form className="movie-search-form" onSubmit={this.findMovie}>
          <label className="search-title" htmlFor="searchTitle">
            Movie Search:{' '}
          </label>
          <input name="searchTitle" onChange={this.onMovieInput} />

          <input
            className="btn btn-secondary"
            type="submit"
            name="submit"
            value="Search Movie"
          />
        </form>
        <div className="card-container">
          {this.state.searchedMovies && this.movieCollection()}
        </div>
      </div>
    );
  }
}

MovieSearch.propTypes = {
  addToLibrary: PropTypes.func,
};
export default MovieSearch;
