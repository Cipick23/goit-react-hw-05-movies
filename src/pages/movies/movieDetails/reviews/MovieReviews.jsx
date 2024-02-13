// MovieReviews.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/common/loader/Loader';
import Error from 'components/common/Error/Error';
import styles from './MovieReviews.module.css';
import getMovieReviews from 'services/movieReviews';

const MovieReviews = ({ movieDetails }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await getMovieReviews(id);
        setReviews(response.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
        setError('A apărut o eroare la preluarea recenziilor filmului');
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
    <div className={styles.reviewsContainer}>
      <h2 className={styles.reviewsTitle}>Reviews</h2>
      {reviews.length > 0 ? (
        <ul className={styles.reviewList}>
          {reviews.map(review => (
            <li key={review.id} className={styles.reviewItem}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noReviews}>No reviews available</p>
      )}
    </div>
  );
};

export default MovieReviews;
