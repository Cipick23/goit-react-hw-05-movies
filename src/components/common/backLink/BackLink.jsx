import React, { useRef } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import styles from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || '/');

  return (
    <div>
      <Link
        to={to ? `${backLinkHref.current}${to}` : backLinkHref.current}
        className={styles.link}
      >
        <HiArrowLeft size="22" />
        {children}
      </Link>
    </div>
  );
};
