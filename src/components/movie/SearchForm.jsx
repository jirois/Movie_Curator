import React, { useEffect, useRef } from 'react'
import { useMovieContext } from '../../context'
import { Form, FormController, FormInput, FormLabel, Wrapper } from '../Styles'

const SearchForm = () => {
    const {setQuery} = useMovieContext()
    const searchRef = useRef()
    const onInputChange = (e) =>{
        setQuery(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        searchRef.current.focus()
    })
  return (
    <Wrapper>
        <Form onSubmit={handleSubmit}>
            <FormController>
                <FormLabel htmlFor='search'>Search your favorite movie</FormLabel>
                <FormInput 
                type='text'
                name='search' 
                ref={searchRef}
                onChange={onInputChange} />

            </FormController>
        </Form>
    </Wrapper>
  )
}

export default SearchForm