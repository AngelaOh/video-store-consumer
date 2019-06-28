import React from 'react';
import Movie from './Movie';
import axios from 'axios';
import PropTypes from 'prop-types';
import './MovieList.css';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }

  componentDidMount = () => {
    this.props.alertCallback('', '');
    this.props.hideWelcomeCallback();
    this.getMovies();
  };

  getMovies = () => {
    URL = 'http://localhost:3000';
    axios
      .get(URL + '/movies')
      .then(response => {
        let movieList = response.data.map(movie => {
          movie.selected = false;
          return movie;
        });

       movieList = movieList.reverse()
       
        this.setState({
          movieList: movieList,
        });
      })
      .catch(error => {
        console.log(error.message);
        this.props.alertCallback(error.message, 'danger');
      });
  };

  handleOnSelectMovie = selectedMovie => {
    this.props.movieSelectCallback(selectedMovie);
    const movieLibrary = this.state.movieList;
    const resetMovie = movieLibrary.find(movie => {
      return movie.selected === true;
    });
    const movie = movieLibrary.find(movie => {
      return movie.external_id === selectedMovie.external_id;
    });
    if (resetMovie) {
      movieLibrary[movieLibrary.indexOf(resetMovie)].selected = false;
    }
    movieLibrary[movieLibrary.indexOf(movie)].selected = true;
    this.setState({ movieList: movieLibrary });
  };

  movieCollection = () => {
    return this.state.movieList.map(movie => {
      return (
        <Movie
          key={movie.id}
          {...movie}
          selectable={true}
          handleMovieSelectCallback={this.handleOnSelectMovie}
        />
      );
    });
  };

  render() {
    return <div className="card-container">{this.movieCollection()}</div>;
  }
}

MovieLibrary.propTypes = {
  movieSelectCallback: PropTypes.func,
  alertCallback: PropTypes.func,
  hideWelcomeCallback: PropTypes.func,
};

export default MovieLibrary;
