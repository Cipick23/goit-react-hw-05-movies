// App.jsx
import Loader from 'components/common/loader/Loader';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/home/Home'));
const SharedLayout = lazy(() => import('pages/SharedLayout'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const MovieDetails = lazy(() =>
  import('pages/movies/movieDetails/MovieDetails')
);
const MoviesSearch = lazy(() =>
  import('pages/movies/moviesSearch/MoviesSearch')
);

const App = () => {
  const handleMoviesSearchInputChange = input => {
    console.log('Input in MoviesSearch:', input);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <SharedLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="movies"
          element={
            <Suspense fallback={<Loader />}>
              <MoviesSearch handleInputChange={handleMoviesSearchInputChange} />
            </Suspense>
          }
        />

        <Route
          path="movies/:id/*"
          element={
            <Suspense fallback={<Loader />}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route index element={<MovieDetails />} />
          <Route path="cast" element={<MovieDetails />} />
          <Route path="reviews" element={<MovieDetails />} />
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
