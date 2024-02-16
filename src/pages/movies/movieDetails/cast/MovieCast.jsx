import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/common/loader/Loader';
import Error from 'components/common/Error/Error';
import styles from './MovieCast.module.css';
import getMovieCredits from 'services/movieCredits';
import PropTypes from 'prop-types';

const MovieCast = ({ movieDetails }) => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await getMovieCredits(id);
        setCast(response.cast);
      } catch (error) {
        setError('An error occurred while retrieving cast details.');
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

  return (
    <>
      <div className={styles.gridContainer}>
        {cast.map(actor => (
          <div key={actor.id} className={styles.actorContainer}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              className={styles.actorImage}
            />
            <div>
              <h1>{actor.name}</h1>
              <p>Character: {actor.character}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

MovieCast.propTypes = {
  movieDetails: PropTypes.object,
};

export default MovieCast;
