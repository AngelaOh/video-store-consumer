import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import 'bootstrap/dist/css/bootstrap.css';


const Movie = props => {
  const addLibraryButton = (
    <button className='btn btn-outline-success' onClick={() => props.addToLibrary({ ...props })}>
      Add to Library
    </button>
  );
  const inLibraryMessage = (
    <div className='badge badge-secondary'>In Movie Library</div>
  )
  const selectMovieButton = (
    <button className='btn btn-outline-success' onClick={() => props.selectMovie({ ...props })}> Select </button>
  );

  const dynamicButton = () => {
    if (props.selectable) {
      return selectMovieButton;
    } else if (!props.in_library) {
      return addLibraryButton;
    } else {
      return inLibraryMessage;
    }
  };

  return (
    <div className='card bg-light mb-3'>
      <img className='card-img-top' src={props.image_url} alt="movie photo" />
      <div className='card-body'>
        <p>ID: {props.id}</p>
        <p>Title: {props.title}</p>
        <p>Overview: {props.overview}</p>
        <p>Release Date: {props.release_date}</p>
        <div>{dynamicButton()}</div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  image_url: PropTypes.string,
  addToLibrary: PropTypes.func,
  selectMovie: PropTypes.func,
};

export default Movie;

