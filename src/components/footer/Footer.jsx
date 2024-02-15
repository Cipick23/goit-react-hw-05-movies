// Footer.jsx
import React, { useEffect, useState, lazy, Suspense } from 'react';
import styles from './Footer.module.css';
import movieService from 'services/trendingMovies';
import ErrorAlert from 'components/common/ErrorAlert/ErrorAlert';
import axios from 'axios';
import PropTypes from 'prop-types';

// Folosește React.lazy() pentru a încărca dinamic componenta MovieList
const MovieList = lazy(() => import('./MovieList'));

const Footer = ({ inputValue, onClick }) => {
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrendingMovies = async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(movieService.trendingMovies);
      setResults(response.data.results);
    } catch (error) {
      setError('An error occurred while retrieving the movies.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  if (isLoading) {
    return <p>I am waiting for the results.</p>;
  }

  return (
    <div>
      <h2 className={styles.title}>Trending Movies</h2>
      {error && error?.length > 0 && <ErrorAlert errors={error} />}

      {/* Utilizează Suspense pentru a încărca MovieList în mod dinamic */}
      <Suspense fallback={<p>Loading...</p>}>
        {results.length > 0 ? <MovieList results={results} /> : null}
      </Suspense>
    </div>
  );
};

Footer.propTypes = {
  inputValue: PropTypes.any,
};

export default Footer;
