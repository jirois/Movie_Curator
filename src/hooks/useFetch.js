import { useEffect, useState } from "react";
import axios from "axios";

const API = `https://www.omdbapi.com/?apikey=77247d73`;

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState([]);

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies(`${API}${urlParams}`);
  }, [urlParams]);
  return { error, isLoading, data };
};

export default useFetch;
