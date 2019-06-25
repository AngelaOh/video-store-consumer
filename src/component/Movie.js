import React from 'react'
import PropTypes from 'prop-types';


const Movie = (props) => {

    const selectMovie = () => {
        // console.log('in the movie component callback function', props.movie.id)
        props.selectMovie(props.movie)
    }

    return (
        <div>
            <p>ID: {props.id}</p>
            <p>Title: {props.title}</p>
            <p>Overview: {props.overview}</p>
            <p>Release Date: {props.release_date}</p>
            <img src={props.image_url} alt='movie photo' />
            <button onClick={selectMovie}> Select </button>
            <p>-----------------------------------------</p>
        </div>
    )
}   

export default Movie