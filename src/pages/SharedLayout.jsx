// SharedLayout.jsx
import React, { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

// Folosim React.lazy() pentru a încărca leneș componente
const Header = lazy(() => import('components/header/Header'));

const SharedLayout = () => {
  return (
    <main style={{}}>
      {/* Suspense pentru a încărca în mod leneș Header */}
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <section className="">
        <Outlet />
      </section>
    </main>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node,
};

export default SharedLayout;
