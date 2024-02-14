import Footer from 'components/footer/Footer';
// import styles from './Home.module.css';
import PropTypes from 'prop-types';
function Home() {
  return (
    <>
      <Footer />
    </>
  );
}

Home.propTypes = {
  onClick: PropTypes.func,
};

export default Home;
