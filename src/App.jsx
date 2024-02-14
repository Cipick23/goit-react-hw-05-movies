// App.jsx
import React, { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Folosim React.lazy() pentru a încărca leneș componente
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SharedLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          ></Route>
          <Route
            path="movies"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MoviesSearch
                  handleInputChange={handleMoviesSearchInputChange}
                />
              </Suspense>
            }
          />
          <Route
            path="movies/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MovieDetails />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MovieDetails />
                </Suspense>
              }
            />
            <Route
              path="cast"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MovieDetails />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MovieDetails />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
