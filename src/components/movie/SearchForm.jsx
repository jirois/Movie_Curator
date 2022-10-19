import React, { useEffect, useRef } from 'react'
import { useMovieContext } from '../../context'
import { ErrorDiv, Form, FormController, FormInput, FormLabel, Wrapper } from '../Styles'

const SearchForm = () => {
    const {error, query, setQuery} = useMovieContext()
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
                value={query}
                ref={searchRef}
                onChange={onInputChange} />

            </FormController>
        {error.show && <ErrorDiv>{error.msg}</ErrorDiv>}

        </Form>

    </Wrapper>
  )
}

export default SearchForm