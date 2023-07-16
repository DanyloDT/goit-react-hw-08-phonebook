import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

import Navbar from 'components/Navbar/Navbar';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <main className={css.main}>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};

export default Layout;
