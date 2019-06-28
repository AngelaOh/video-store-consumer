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
    this.props.alertCallback('', '');
    this.props.hideWelcomeCallback();
  };

  getMovies = () => {
    URL = 'http://localhost:3000';
    this.props.alertCallback('', '');
    axios
      .get(URL + '/movies?query=' + this.state.searchTitle)
      .then(response => {
        let movieList = response.data.map(movie => {
          return movie;
        });
        movieList = movieList.sort((a, b) => {
          if (a && b) {
            return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
          }
        });
        this.setState({
          searchedMovies: movieList,
        });
        if (movieList.length === 0) {
          const errorMessage = 'No movies found.';
          this.props.alertCallback(errorMessage, 'danger');
        }
      })
      .catch(error => {
        console.log(error.message);
        this.props.alertCallback(error.message, 'danger');
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

  handldAddedToLibrary = addedMovie => {
    this.props.addToLibraryCallback(addedMovie);
    const movieList = this.state.searchedMovies;
    const movie = movieList.find(movie => {
      return movie.external_id === addedMovie.external_id;
    });
    movieList[movieList.indexOf(movie)].in_library = true;
    this.setState({ searchedMovies: movieList });
  };

  movieCollection = () => {
    return this.state.searchedMovies.map(movie => {
      return (
        <Movie
          key={movie.id}
          {...movie}
          isSearch={this.state.isSearch}
          handleAddedToLibraryCallback={this.handldAddedToLibrary}
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
  addToLibraryCallback: PropTypes.func,
  alertCallback: PropTypes.func,
  hideWelcomeCallback: PropTypes.func,
};

export default MovieSearch;
