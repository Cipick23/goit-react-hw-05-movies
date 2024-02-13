import React, { useEffect } from 'react';
import fetchMovieDetails from 'services/apiDetails';
import movieCredits from 'services/movieCredits';
import movieReviews from 'services/movieReviews';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from 'pages/home/Home';
import SharedLayout from 'pages/SharedLayout';
import NotFoundPage from 'pages/NotFoundPage';
import MovieDetails from 'pages/movies/movieDetails/MovieDetails';
import MoviesSearch from 'pages/movies/moviesSearch/MoviesSearch';

const App = () => {
  useEffect(() => {
    const id = 123; // Înlocuiește cu ID-ul real al filmului pe care vrei să-l obții
    movieReviews(id)
      .then(response => {
        console.log('Lista filme revazute:', response);
        // Aici poți face ceva cu detaliile filmului, cum ar fi actualizarea stării componentei
      })
      .catch(err => {
        console.error(
          `Eroare la preluarea filme revazute cu ID-ul ${id}:`,
          err
        );
      });
  }, []);

  useEffect(() => {
    const id = 123;
    movieCredits(id)
      .then(response => {
        console.log('Creditele filmului:', response);
        // Aici poți face ceva cu creditele filmului, cum ar fi actualizarea stării componentei
      })
      .catch(err => {
        console.error(
          `Eroare la preluarea creditelor filmului cu ID-ul ${id}:`,
          err
        );
      });
  }, []);

  useEffect(() => {
    const id = 342;
    fetchMovieDetails(id)
      .then(response => {
        console.log('Despre film:', response);
        // Aici poți face ceva cu detalile filmului, cum ar fi actualizarea stării componentei
      })
      .catch(err => {
        console.error(
          `Eroare la preluarea detalile filmului cu ID-ul ${id}:`,
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
          <Route path="movies/:id" element={<MovieDetails />}>
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
