import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MoviesSearch.module.css';
import axios from 'axios';
import PropTypes from 'prop-types';
import Error from 'components/common/Error/Error';

const MoviesSearch = ({ handleInputChange }) => {
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState('');

  const onSubmit = async ev => {
    ev.preventDefault();

    if (typeof handleInputChange === 'function') {
      handleInputChange(input);
    } else {
      console.error('handleInputChange is not a function');
    }

    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            include_adult: false,
            language: 'en-US',
            page: 1,
            query: input,
          },
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzFjMWQ0MjljYzEzYmFhOTQ5OTI1N2VlMzJiNDU0YSIsInN1YiI6IjY1YzM0NzFlOTVhY2YwMDE4MzFjYzFhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JLn5JCCJxeGxonVwpy_8IiREG1kTSzIQforDO2lzJwI',
          },
        }
      );

      if (response.data.results.length === 0) {
        setSearchResults([]);
        setSearchError('No results found for the given search term.');
      } else {
        setSearchResults(response.data.results);
        setSearchError('');
      }
    } catch (error) {
      <Error message={error} />;
      setSearchResults([]);
      setSearchError(
        'An error occurred while fetching search results from API:'
      );
    }

    setInput('');
  };

  const onChange = ev => {
    setInput(ev.target.value);
  };

  return (
    <section className={styles.Header}>
      <div className={styles.searchContainer}>
        <form className={styles.SearchForm} onSubmit={onSubmit}>
          <button type="submit" className={styles.SearchFormButton}></button>
          <input
            name="input"
            type="text"
            autoComplete="off"
            onChange={onChange}
            value={input}
            autoFocus
            placeholder="Search movies"
            className={styles.SearchFormInput}
          />
        </form>

        {searchError && <p>{searchError}</p>}

        {searchResults.length > 0 && (
          <div className={styles.searchResultsContainer}>
            <h2>Search Results:</h2>
            <ul>
              {searchResults.map(result => (
                <li key={result.id} className={styles.list}>
                  <NavLink
                    className={isActive =>
                      isActive
                        ? `${styles.navLink} ${styles.navLinkActive}`
                        : styles.navLink
                    }
                    to={`/movies/${result.id}`}
                  >
                    {result.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

MoviesSearch.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
};

export default MoviesSearch;
