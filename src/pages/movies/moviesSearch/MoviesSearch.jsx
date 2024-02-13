// MoviesSearch.jsx
import React, { useState } from 'react';
import styles from './MoviesSearch.module.css';

const MoviesSearch = ({ handleInputChange }) => {
  const [input, setInput] = useState('');

  const onSubmitImg = ev => {
    ev.preventDefault();
    handleInputChange(input);
    setInput('');
  };

  const onChangeImg = ev => {
    setInput(ev.target.value);
  };

  return (
    <section className={styles.Header}>
      <form className={styles.SearchForm} onSubmit={onSubmitImg}>
        <button type="submit" className={styles.SearchFormButton}></button>
        <input
          name="input"
          type="text"
          autoComplete="off"
          onChange={onChangeImg}
          value={input}
          autoFocus
          placeholder="Search movies"
          className={styles.SearchFormInput}
        />
      </form>
    </section>
  );
};

export default MoviesSearch;
