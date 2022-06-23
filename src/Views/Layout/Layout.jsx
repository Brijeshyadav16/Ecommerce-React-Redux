import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header.components';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='mt__5'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
