import React from 'react'

const Movie = (props) => {

    return (
        <div>
            {props.movie.id}
            {props.movie.title}
            {props.movie.overview}
            {props.movie.release_date}
            {props.movie.external_id}
            <img src={props.movie.image_url} alt='movie photo' />
            -----------------------------------------
        </div>
    )
}   

export default Movie