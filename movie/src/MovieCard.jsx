import React from 'react'

const MovieCard = ({poster, title}) => {
  return (
    <div className='movie-card'>
        <img src={poster} alt={`${title} poster`}></img>
        <h3>{title}</h3>
    </div>
  )
}

export default MovieCard