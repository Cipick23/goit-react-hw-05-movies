import React, { lazy, Suspense, useEffect, useState } from 'react';
import {
  NavLink,
  useParams,
  Route,
  Routes,
  useLocation,
  // useNavigate,
} from 'react-router-dom';
import Loader from 'components/common/loader/Loader';
import Error from 'components/common/Error/Error';
import PropTypes from 'prop-types';
import { BackLink } from 'components/common/backLink/BackLink';
import fetchMovieDetails from 'services/apiDetails';
import styles from './MovieDetails.module.css';

// Folosește React.lazy() pentru a încărca dinamic componentele MovieCast și MovieReviews
const MovieCast = lazy(() => import('./cast/MovieCast'));
const MovieReviews = lazy(() => import('./reviews/MovieReviews'));
const MoviesSearch = lazy(() => import('../moviesSearch/MoviesSearch'));

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({
    id: 0,
    poster_path: '',
    title: '',
    popularity: '',
    genres: [],
    overview: '',
    description: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();
  // const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = inputValue => {
    console.log('Input value in MovieDetails:', inputValue);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetchMovieDetails(id);
        setMovieDetails(response);
      } catch (error) {
        setError('An error occurred while retrieving movie details.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error && error.length > 0) {
    return <Error message={error} />;
  }

  const genresString = movieDetails.genres.map(genre => genre.name).join(', ');

  const isMoviesRoute =
    location.pathname.includes('movies') &&
    !location.pathname.includes('movies/');

  return (
    <>
      <BackLink to={''}>Back</BackLink>

      {isMoviesRoute && (
        <Suspense fallback={<Loader />}>
          <MoviesSearch handleInputChange={handleInputChange} />
        </Suspense>
      )}

      <div className={styles.flex}>
        <div className={styles.imgContainer}>
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className={styles.ImageGalleryItem}
          />
        </div>
        <div>
          <h1>{movieDetails.title}</h1>
          <p>Popularity: {movieDetails.popularity}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{genresString}</p>
        </div>
      </div>

      <div className={styles.flex}>
        <NavLink
          to={`/movies/${id}/cast`}
          className={({ isActive }) =>
            [styles.navLink, isActive ? styles.navLinkActive : ''].join(' ')
          }
        >
          Cast
        </NavLink>
        <NavLink
          to={`/movies/${id}/reviews`}
          className={({ isActive }) =>
            [styles.navLink, isActive ? styles.navLinkActive : ''].join(' ')
          }
        >
          Reviews
        </NavLink>
      </div>

      <div className={styles.additionalInformation}>
        <h2 className={styles}>Additional information</h2>
        <Routes>
          <Route
            path="cast"
            element={
              <Suspense fallback={<Loader />}>
                <MovieCast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<Loader />}>
                <MovieReviews movieDetails={movieDetails} />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  movieDetails: PropTypes.object,
};

export default MovieDetails;
