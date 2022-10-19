import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { Button, Loading, PageError,  SingleMovieContainer } from '../Styles'

const SingleMovie = () => {
    const {id} = useParams()
    const {isLoading, error, data: movie} = useFetch(`&i=${id}`)

    if (isLoading){
        return <Loading></Loading>
    }
    if (error.show){
        return (
            <PageError>
                <h2>{error.msg}</h2>
                <Button to='/'>back to movies</Button>
            </PageError>
        )
    }

    const {Poster: poster, Title: title, Plot:plot, Year: year} = movie;
  return (
    <SingleMovieContainer>
        <img src={poster} alt={title} />
        <div>
            <h2>{title}</h2>
            <p>{plot}</p>
            <h4>{year}</h4>
            <Button to='/'>
                back to movies
            </Button>
        </div>

    </SingleMovieContainer>
  )
}

export default SingleMovie