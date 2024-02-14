import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MovieList.module.css';
import PropTypes from 'prop-types';

const MovieList = ({ results }) => (
  <ul>
    {results.map(({ id, title, url }) => (
      <li key={id} className={styles.list}>
        <NavLink
          to={`/movies/${id}`}
          className={isActive =>
            isActive
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }
        >
          {title}
        </NavLink>
      </li>
    ))}
  </ul>
);

MovieList.propTypes = {
  results: PropTypes.array.isRequired,
};

export default MovieList;
