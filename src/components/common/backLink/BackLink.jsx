import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styles from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={styles.link}>
      <HiArrowLeft size="22" />
      {children}
    </Link>
  );
};
