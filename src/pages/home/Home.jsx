import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/common/loader/Loader';

const Footer = lazy(() => import('components/footer/Footer'));

function Home() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Footer />
      </Suspense>
    </>
  );
}

Home.propTypes = {
  onClick: PropTypes.func,
};

export default Home;
