import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Header />
      <section className="">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default SharedLayout;
