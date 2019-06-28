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
        const movieList = response.data.map(movie => {
          return movie;
        });

        this.setState({
          movieList: movieList,
        });
      })
      .catch(error => {
        console.log(error.message);
        this.props.alertCallback(error.message, 'danger');
      });
  };

  movieCollection = () => {
    return this.state.movieList.map(movie => {
      return (
        <Movie
          key={movie.id}
          {...movie}
          selectable={true}
          movieSelectCallback={this.props.movieSelectCallback}
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
