import React from 'react'
import propTypes from 'prop-types'
import './Movie.css'
import { Link } from 'react-router-dom'


function Movies( {year, title, summary, poster, genres} ){
    return (

        <Link to={{
            pathname: '/movie-detail',
            state: {
                year: year,
                title: title,
                summary: summary,
                poster: poster,
                genres: genres
            }
        }}>

            <div className='movie'>
                <img src={poster} alt={title} title={title}></img>
                <div className='movie__data'>
                    <h3 className='movie__title'>{title}</h3>
                    <h5 className='movie__year'>{year}</h5>
                    <ul className='movie__genres'>
                        { genres && genres.map((genre, index) => (<li key={index} className='genres__genre'>{genre}</li>)) }
                    </ul>
                    <p className='movie__summary'>{summary.slice(0, 140)}...</p>
                </div>
            </div>

        </Link>

    )
}



// poster - medium cover image
Movies.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movies