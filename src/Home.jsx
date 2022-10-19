import React from 'react'
import Movies from './components/movie/Movies'
import SearchForm from './components/movie/SearchForm'

const Home = () => {
  return (
    <>
    <SearchForm />
    <Movies />
    </>
  )
}

export default Home