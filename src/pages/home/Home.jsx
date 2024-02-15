import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

// Folosește React.lazy() pentru a încărca dinamic componenta Footer
const Footer = lazy(() => import('components/footer/Footer'));

function Home() {
  return (
    <>
      {/* Utilizează Suspense pentru a încărca Footer în mod dinamic */}
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

Home.propTypes = {
  onClick: PropTypes.func,
};

export default Home;
