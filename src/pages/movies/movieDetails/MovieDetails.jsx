// MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import {
  NavLink,
  useParams,
  Route,
  Routes,
  useLocation,
  // useNavigate,
} from 'react-router-dom';
import styles from './MovieDetails.module.css';
import Loader from 'components/common/loader/Loader';
import Error from 'components/common/Error/Error';
import fetchMovieDetails from 'services/apiDetails';
import MovieCast from './cast/MovieCast';
import MovieReviews from './reviews/MovieReviews';
import MoviesSearch from '../moviesSearch/MoviesSearch';
import PropTypes from 'prop-types';
import { BackLink } from 'components/common/backLink/BackLink';

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
        <Error message={error} />;
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
    location.pathname.includes('/movies') &&
    !location.pathname.includes('/movies/');

  return (
    <>
      <BackLink to="/movies">Back</BackLink>

      {isMoviesRoute && <MoviesSearch handleInputChange={handleInputChange} />}

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
        <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
        <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
      </div>

      <div className={styles.additionalInformation}>
        <h2 className={styles}>Additional information</h2>
        <Routes>
          <Route
            path="cast"
            element={<MovieCast movieDetails={movieDetails} />}
          />
          <Route
            path="reviews"
            element={<MovieReviews movieDetails={movieDetails} />}
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
