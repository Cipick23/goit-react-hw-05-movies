import React, { useEffect, useState } from 'react';
import styles from './MovieList.module.css';
import movieService from 'services/trendingMovies';
import ErrorAlert from 'components/common/ErrorAlert/ErrorAlert';
import MovieList from './MovieList';
import axios from 'axios';

const Footer = ({ inputValue, onClick }) => {
  const [error, setError] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrendingMovies = async () => {
    try {
      setIsLoading(true);
      const response = await axios.request(movieService.trendingMovies);
      console.log(response); // Adăugă această linie
      setResults(response.data.results);
    } catch (error) {
      console.error('Eroare la preluarea filmelor:', error); // Adăugă această linie
      setError('A apărut o eroare la preluarea filmelor');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []); // Efectul va rula doar la montarea componentei

  if (isLoading) {
    return <p>Aștept după rezultate</p>;
  }

  return (
    <div>
      <h2 className={styles.title}>Trending Movies</h2>
      {error && error?.length > 0 && <ErrorAlert errors={error} />}
      {results.length > 0 ? <MovieList results={results} /> : null}
    </div>
  );
};

export default Footer;
