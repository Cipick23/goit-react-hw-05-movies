// import Footer from 'components/movieList/Footer';
import Header from 'components/header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <main style={{}}>
      <Header />
      <section className="">
        <Outlet />
      </section>
    </main>
  );
};

export default SharedLayout;
