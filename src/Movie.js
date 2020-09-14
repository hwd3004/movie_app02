import React from 'react'
import propTypes from 'prop-types'


function Movies( {id, year, title, summary, poster} ){
    return (
        <div className='movies__movie'>
            <img src={poster} alt={title} title={title}></img>
            <div className='movie__data'>
                <h3 className='movie__title'>{title}</h3>
                <h5 className='movie__year'>{year}</h5>
                <p className='movie__summary'>{summary}</p>
            </div>
        </div>
    )
}



// poster - medium cover image
Movies.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}

export default Movies