import React from 'react';
import PropTypes from 'prop-types';


const Movie = (props) => {

    return (
        <div>
            <p>ID: {props.id}</p>
            <p>Title: {props.title}</p>
            <p>Overview: {props.overview}</p>
            <p>Release Date: {props.release_date}</p>
            <img src={props.image_url} alt='movie photo' />
            <button onClick={() => props.selectMovie({...props})}> Select </button>
            <p>-----------------------------------------</p>
        </div>
    );
};   

export default Movie;