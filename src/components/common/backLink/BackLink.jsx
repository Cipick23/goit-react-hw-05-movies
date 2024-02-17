import React from 'react';
// import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import styles from './BackLink.module.css';
import { HiArrowLeft } from 'react-icons/hi';

export const BackLink = ({ to, children }) => {
  // const location = useLocation();
  // const backLinkHref = useRef(location.state?.from || '/');

  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <div>
      {/* <Link
        to={to ? `${backLinkHref.current}${to}` : backLinkHref.current}
        className={styles.link}
      >
        <HiArrowLeft size="22" />
        {children}
      </Link> */}
      <button className={styles.link} type="button" onClick={handleClick}>
        <HiArrowLeft size="22" />
        Go Back
      </button>
    </div>
  );
};

export default BackLink;
