import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../Views/Layout/Layout';

import Category from '../Views/Category/Category';
import Login from '../Views/LogIn/LogIn';
import SignUp from '../Views/SignUp/SignUp';
import Product from '../Views/Product/Product';
import CheckOut from '../Views/CheckOut/CheckOut';
import SingleProduct from '../Views/Product/SingleProduct';

const routes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Category />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route
            path='/product/single/:name'
            element={<SingleProduct />}
          ></Route>
          <Route path='/checkout' element={<CheckOut />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default routes;
