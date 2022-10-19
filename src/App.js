import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  console.log(process.env.REACT_APP_MOVIE_API_KEY);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
