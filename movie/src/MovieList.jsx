import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'

const MovieList = () => {

    const [movies, setMovies] = useState([])
    const apiUrl = process.env.REACT_APP_MOVIE_API_URL
   
    useEffect(() => {
      const fetchMovies = async()=>{
        try {
            console.log('api url', apiUrl)
            const response = await fetch(apiUrl)
            if (!response.ok) {
                throw new Error('Network response was not ok');
              }
            const data = await response.json()
            setMovies(data.results)
        } catch (error) {
            console.log('Error fetching movies')
        }
      }
      fetchMovies()
      
    }, [apiUrl])
    


  return (
    <div className='movie-list'>
        {movies.length > 0 ? (
            movies.map((movie)=>(
                <MovieCard 
                    key={movie.id}
                    title={movie.title}
                    poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
            ))
        ):(
            <p>Lodaing Movies...</p>
        )}
    </div>
  )
}

export default MovieList