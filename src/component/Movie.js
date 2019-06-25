import React from 'react'

const Movie = (props) => {

    const selectMovie = () => {
        // console.log('in the movie component callback function', props.movie.id)
        props.selectMovie(props.movie)
    }

    return (
        <div>
            <p>ID: {props.movie.id}</p>
            <p>Title: {props.movie.title}</p>
            <p>Overview: {props.movie.overview}</p>
            <p>Release Date: {props.movie.release_date}</p>
            <img src={props.movie.image_url} alt='movie photo' />
            <button onClick={selectMovie}> Select </button>
            <p>-----------------------------------------</p>
        </div>
    )
}   

export default Movie