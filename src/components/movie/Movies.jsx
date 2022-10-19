import React from 'react'
import { useMovieContext } from '../../context'
import { Loading, MovieCover, MovieInfo, MoviePoster, MovieWrapper } from '../Styles'
const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
    const {movies, isLoading} = useMovieContext()
    if (isLoading){
        return <Loading></Loading>
    }
  return (
   
    <MovieWrapper>
        {movies.map((movie) => {
         const {imdbID: id, Poster: poster, Title:title, Year: year} = movie;
         return (
            <MovieCover to={`movies/${id}`} key={id}>
                <MoviePoster src={poster === 'N/A' ? url : poster} />
                <MovieInfo>
                    <h4>{title}</h4>
                    <p>{year}</p>
                </MovieInfo>
            </MovieCover>
         )

        })}

    </MovieWrapper>
  )
}

export default Movies