import React, { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

// If we use lazy with suspense then only particular file data will load.

const Layout = lazy(() => import('../Views/Layout/Layout'));

const Category = lazy(() => import('../Views/Category/Category'));
const Login = lazy(() => import('../Views/LogIn/LogIn'));
const SignUp = lazy(() => import('../Views/SignUp/SignUp'));
const Product = lazy(() => import('../Views/Product/Product'));
const CheckOut = lazy(() => import('../Views/CheckOut/CheckOut'));
const SingleProduct = lazy(() => import('../Views/Product/SingleProduct'));

const routes = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
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
      </Suspense>
    </>
  );
};

export default routes;
