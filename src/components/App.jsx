import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./HomePage/HomePage"));
const Movies = lazy(() => import("./Movies/Movies"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./MovieDetails/Cast"));
const Reviews = lazy(() => import("./MovieDetails/Reviews"));
const SearchMovies = lazy(() => import("./Movies/SearchMovies"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage/>} />
          <Route path="movies" element={<Movies />}>
            <Route index element={<Suspense fallback={<div>Loading...</div>}><SearchMovies /></Suspense>} />
            <Route path=":movieId" element={<Suspense fallback={<div>Loading...</div>}><MovieDetails /></Suspense>}>
              <Route path="cast" element={<Suspense fallback={<div>Loading...</div>}><Cast /></Suspense>} />
              <Route path="reviews" element={<Suspense fallback={<div>Loading...</div>}><Reviews /></Suspense>} />
            </Route>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route> 
      </Routes>
    </>
  );
};
