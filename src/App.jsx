// App.jsx
import Loader from 'components/common/loader/Loader';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

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
    <Routes>
      <Route
        path="/"
        element={
          <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            <SharedLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="movies"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <MoviesSearch handleInputChange={handleMoviesSearchInputChange} />
            </Suspense>
          }
        />
        <Route
          path="movies/:id/*"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <MovieDetails />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <MovieDetails />
              </Suspense>
            }
          />
          <Route
            path="cast"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <MovieDetails />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense
                fallback={
                  <div>
                    <Loader />
                  </div>
                }
              >
                <MovieDetails />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense
              fallback={
                <div>
                  <Loader />
                </div>
              }
            >
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
