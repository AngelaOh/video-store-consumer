import React from 'react'

const Movie = (props) => {

    const selectMovie = () => {
        props.selectMovie(props.movie.id)
    }

    return (
        <div>
            <p>ID: {props.movie.id}</p>
            <p>Title: {props.movie.title}</p>
            <p>Overview: {props.movie.overview}</p>
            <p>Release Date: {props.movie.release_date}</p>
            {/* <p>External ID: {props.movie.external_id}</p> */}
            <img src={props.movie.image_url} alt='movie photo' />
            <button onClick={selectMovie}> Select </button>
            <p>-----------------------------------------</p>
        </div>
    )
}   

export default Movie