import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./components/movie/SingleMovie";

function App() {
  console.log(process.env.REACT_APP_MOVIE_API_KEY);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={<Movie />} />
    </Routes>
  );
}

export default App;
