import React from 'react';
import PropTypes from 'prop-types';

const Movie = props => {
  const addLibraryButton = (
    <button onClick={() => props.addToLibrary({ ...props })}>
      Add to Library
    </button>
  );
  const selectMovieButton = (
    <button onClick={() => props.selectMovie({ ...props })}> Select </button>
  );

  const dynamicButton = () => {
    if (props.selectable) {
      return selectMovieButton;
    } else if (!props.in_library) {
      return addLibraryButton;
    }
  };

  return (
    <div>
      {console.log(props)}
      <p>ID: {props.id}</p>
      <p>Title: {props.title}</p>
      <p>Overview: {props.overview}</p>
      <p>Release Date: {props.release_date}</p>
      <img src={props.image_url} alt="movie photo" />
      {dynamicButton()}
      <p>-----------------------------------------</p>
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
