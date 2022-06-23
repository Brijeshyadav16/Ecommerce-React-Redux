import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { userSelector, LOG_OUT } from '../../redux/features/userSlice';
import { cartSelector } from '../../redux/features/cartSlice';

import CartIcon from '../../assets/images/shopping-cart.png';
import Logo from '../Icon/Logo';

import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

const Header = () => {
  const { cartItem } = useSelector(cartSelector);
  const { token } = useSelector(userSelector);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LOG_OUT());
    toast.success('User logout successfully !');
  };

  return (
    <>
      <header className='container__fluid'>
        <nav className='container flex space__between align__items__center'>
          <div>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <div>
            <ul className='flex align__items__center'>
              <li className='list__style__none mx__2 '>
                <Link
                  to='/product'
                  className='text__decoration__none text__color__black'
                >
                  PRODUCT
                </Link>
              </li>
              {token ? (
                <li className='list__style__none mx__2'>
                  <button className='p__1' onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              ) : (
                <li className='list__style__none mx__2'>
                  <Link
                    to='/login'
                    className='text__decoration__none text__color__black'
                  >
                    LOGIN
                  </Link>
                </li>
              )}
              <li className='list__style__none mx__2'>
                <Link
                  to='/checkout'
                  className='text__decoration__none text__color__black'
                >
                  <div className='flex align__items__center'>
                    <img
                      src={CartIcon}
                      alt='CartIcon'
                      width='24px'
                      className='cursor__pointer'
                    />
                    <h5 className='m__1'>{cartItem.length}</h5>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
