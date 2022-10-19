import { useEffect, useState } from "react";
import axios from "axios";

const API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState([]);

  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (e) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API}${urlParams}`);
  }, [urlParams]);

  return {
    loading,
    error,
    data,
  };
};

export default useFetch;
