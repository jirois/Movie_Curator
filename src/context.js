import React, { useState } from "react";
import { useContext } from "react";
import useFetch from "./hooks/useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
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
