import React from 'react';
import Movie from './Movie';
import axios from 'axios';
import PropTypes from 'prop-types';
import './MovieList.css'

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    this.getMovies();
  }

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
        return console.log(error.message);
      });
  };

  movieCollection = () => {
    return this.state.movieList.map(movie => {
      return (
        <Movie
          key={movie.id}
          {...movie}
          selectable={true}
          selectMovie={this.props.selectMovie}
        />
      );
    });
  };

  render() {
    return <div className='card-container'>{this.movieCollection()}</div>;
  }
}

MovieLibrary.propTypes = {
  selectMovie: PropTypes.func,
};

export default MovieLibrary;
