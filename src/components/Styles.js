import styles, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

//forms

export const Wrapper = styles.div`
   margin-top: 1rem;
   padding: 5rem 0 0;
   margin-bottom: 1rem;
`;

export const Form = styles.form`
    width: 90vw;
    max-width: 80rem;
    margin: 0 auto;
    background: white;
    padding: 2rem 1rem;
    text-transform: capitalize;
    border-radius: 5px;
    box-shadow: 2px 5px 3px 0px rgba(0,0,0,0.5);

`;
export const FormController = styles.div`
   padding: 2px 4px;
    
`;
export const FormInput = styles.input`
    width: 100%;
    border: none;
    border-color: transparent;
    background: #f1f5f8;
    border-radius: 5px;
    padding:1rem 0.5rem;
    font-size: 1.2rem;

`;

export const FormLabel = styles.label`
    display: block;
    margin-bottom: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.25rem; 
    color: black;
    font-size: 1.5rem; 
`;

//Loading
const spinner = keyframes`
    to{
        transform: rotate(360deg);
    }
`;
export const Loading = styles.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 3px solid #ccc;    
  border-top-color: hsl(205, 78%, 60%);
  margin: 10rem auto 0;
  animation: ${spinner} 0.6s linear infinite;
  
`;

// movie

export const MovieWrapper = styles.div`
    width: 90vw;
    max-width: 80rem;
    display: grid;
    gap: 2rem;
    padding: 0 1.5rem;
    margin: 0 auto;
    padding-bottom: 5rem;
    padding-top: 3rem;
    box-shadow: 1px 3px 2px rgba(0,0,0,0.25);

    @media (min-width: 576px){
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

`;

export const MoviePoster = styles.img`
 width: 100%;
 height: 400px;
 display: block;
 object-fit: cover;
`;

export const MovieInfo = styles.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.6);
    transform: translateY(100%);
    transition: all 0.3s linear;
    display: flex:
    flex-direction: column;
    align-items: center;

    & > h4 {
        color: white;
        margin-bottom: 0.25rem;
    }

    & > p {
        color: white;
        margin-bottom: 0;
    } 

`;

export const MovieCover = styles(Link)`
   position: relative;
   overflow: hidden;

   &:hover ${MovieInfo} {
    transform: translateY(0);
   }
   
`;

export const PageError = styles.div`
   text-align: center;
   padding: 2rem;
`;

export const Button = styles(Link)`
   text-transform: capitalize;
   padding: 0.25rem 0.5rem;
   background: hsl(210, 22%, 49%);
   border-radius: 5px;
   display: inline-block;
   margin-top: 0.5rem;
   letter-spacing: 1px;
   color: white;

`;

export const SingleMovieContainer = styles.div`
   width: 90vw;
   max-width: 80rem;
   margin: 4rem auto;
   display: grid;
   gap: 1rem;
   color: white;

   & > img {
    width: 100%;
    display: block;
   }

   & > p {
    max-width: 35rem;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    line-height: 1.8;
   }

   @media (min-width: 992px){
    grid-template-columns: 1fr 2fr;
   }
`;

export const ErrorDiv = styles.div`
   color: hsl(360, 67%, 44%);
   text-transform: capitalize;
   padding-top: 0.5rem;
   letter-spacing: 1px;

`;
