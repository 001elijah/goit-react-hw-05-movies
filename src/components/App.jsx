import { Route, Routes } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import { HomePage } from "./HomePage/HomePage";
import { Movies } from "./Movies/Movies";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./MovieDetails/Cast";

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="movies" element={<Movies/>}>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
