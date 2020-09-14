import React from 'react'
import propTypes from 'prop-types'


function Movies( {id, year, title, summary, poster} ){
    return (
        <div>
            <h5>{title}</h5>
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