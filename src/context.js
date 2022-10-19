import React, { useState } from "react";
import { useContext } from "react";
import useFetch from "./hooks/useFetch";

export const API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { error, isLoading, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        error,
        isLoading,
        movies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
