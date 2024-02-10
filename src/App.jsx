import React, { useEffect } from 'react';
import fetchMovieDetails from 'services/apiDetails';
import movieCredits from 'services/movieCredits';
import movieReviews from 'services/movieReviews';
import trendingMovies from 'services/trendingMovies';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from 'pages/home/Home';
import SharedLayout from 'pages/SharedLayout';
import NotFoundPage from 'pages/NotFoundPage';
import MovieDetails from 'pages/movies/movieDetails/MovieDetails';
import MoviesSearch from 'pages/movies/MoviesSearch';

const App = () => {
  useEffect(() => {
    const movieId = 123; // Înlocuiește cu ID-ul real al filmului pe care vrei să-l obții
    movieReviews(movieId)
      .then(response => {
        console.log('Lista filme revazute:', response);
        // Aici poți face ceva cu detaliile filmului, cum ar fi actualizarea stării componentei
      })
      .catch(err => {
        console.error(
          `Eroare la preluarea filme revazute cu ID-ul ${movieId}:`,
          err
        );
      });
  }, []);

  useEffect(() => {
    const movieId = 123;
    movieCredits(movieId)
      .then(response => {
        console.log('Creditele filmului:', response);
        // Aici poți face ceva cu creditele filmului, cum ar fi actualizarea stării componentei
      })
      .catch(err => {
        console.error(
          `Eroare la preluarea creditelor filmului cu ID-ul ${movieId}:`,
          err
        );
      });
  }, []);

  useEffect(() => {
    const time_window = 123;
    trendingMovies(time_window)
      .then(response => {
        console.log('Filmele cele mai vizionate:', response);
        // Aici poți face ceva cu creditele filmului, cum ar fi actualizarea stării componentei
      })
      .catch(err => {
        console.error(
          `Eroare la preluarea filmelor cele mai vizionate cu ID-ul ${time_window}:`,
          err
        );
      });
  }, []);

  useEffect(() => {
    const movieId = 123;
    fetchMovieDetails(movieId)
      .then(response => {
        console.log('Despre film:', response);
        // Aici poți face ceva cu detalile filmului, cum ar fi actualizarea stării componentei
      })
      .catch(err => {
        console.error(
          `Eroare la preluarea detalile filmului cu ID-ul ${movieId}:`,
          err
        );
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<MoviesSearch />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route index element={<MovieDetails />} />
            <Route path="cast" element={<MovieDetails />} />
            <Route path="reviews" element={<MovieDetails />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
