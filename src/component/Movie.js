import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {

    const addLibraryButton = <button onClick={() => props.addToLibrary({...props})}>Add to Library</button>
    const selectMovieButton = <button onClick={() => props.selectMovie({...props})}> Select </button>

    return (
        <div>
            <p>ID: {props.id}</p>
            <p>Title: {props.title}</p>
            <p>Overview: {props.overview}</p>
            <p>Release Date: {props.release_date}</p>
            <img src={props.image_url} alt='' />
            {props.isSearch ? addLibraryButton : selectMovieButton}
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
    selectMovie: PropTypes.func
}
export default Movie;