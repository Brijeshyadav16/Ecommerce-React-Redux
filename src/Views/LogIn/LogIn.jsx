import React, { useEffect, useState } from 'react';

import Button from '../../components/Button/Button.component';
import FormInput from '../../components/FormInput/FormInput.component';

import { useDispatch, useSelector } from 'react-redux';
import {
  LOGIN_USER,
  TOKEN,
  userSelector,
} from '../../redux/features/userSlice';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { LOGIN } from '../../service';

const payloadValue = {
  email: '',
  password: '',
};

const Login = () => {
  const [payload, setPayload] = useState(payloadValue);

  const { token } = useSelector(userSelector);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = LOGIN.LOGIN_API(payload);
      if (res.status === 1 || res.status === '1') {
        localStorage.setItem('user', JSON.stringify(res?.data));
        localStorage.setItem('token', JSON.stringify(res?.token));
        dispatch(LOGIN_USER(res?.data));
        dispatch(TOKEN(res?.token));
        navigate('/');
        toast.success(res.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  return (
    <div className='signup__style'>
      <div>
        <h2>Already have a account</h2>
        <p className='mt__1'>Sign in with your email and password</p>
      </div>
      <div className='mt__4'>
        <form method='get' onSubmit={handleSubmit}>
          <div className='my__9'>
            <FormInput
              type='email'
              placeholder='Email'
              name='email'
              required
              value={payload.email}
              onChange={onChange}
            />
          </div>
          <div className='my__9'>
            <FormInput
              type='password'
              placeholder='Password'
              name='password'
              required
              value={payload.password}
              onChange={onChange}
            />
          </div>
          <div className='mt__10 flex align__items__center'>
            <Button type='submit' className='mr__3'>
              SIGNIN
            </Button>
          </div>
          <div className='mt__5'>
            <h4 className='cursor__pointer' onClick={() => navigate('/signup')}>
              Don't have a account.
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
