import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MovieList.module.css';

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

export default MovieList;
