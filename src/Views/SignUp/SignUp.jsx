import React, { useEffect, useState } from 'react';

import FormInput from '../../components/FormInput/FormInput.component';
import Button from '../../components/Button/Button.component';

import { useDispatch, useSelector } from 'react-redux';
import {
  LOGIN_USER,
  TOKEN,
  userSelector,
} from '../../redux/features/userSlice';

import { LOGIN } from '../../service/index';

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

const payloadValue = {
  displayName: '',
  email: '',
  password: '',
};

const SignUp = () => {
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
    const res = LOGIN.SIGNUP_API(payload);
    if (res.status === 1 || res.status === '1') {
      localStorage.setItem('user', JSON.stringify(res?.data));
      localStorage.setItem('token', JSON.stringify(res?.token));
      dispatch(LOGIN_USER(res?.data));
      dispatch(TOKEN(res?.token));
      navigate('/');
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [navigate, token]);

  return (
    <>
      <div className='signup__style'>
        <div>
          <h2>I do not have a account</h2>
          <p className='mt__1'>Sign up with your email and password</p>
        </div>
        <div className='mt__4'>
          <form method='get' onSubmit={handleSubmit}>
            <div className='my__9'>
              <FormInput
                type='text'
                placeholder='Display Name'
                name='displayName'
                required
                value={payload.displayName}
                onChange={onChange}
              />
            </div>
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
            <div className='mt__10'>
              <Button type='submit'>SIGNUP</Button>
            </div>
            <div className='mt__5'>
              <h4
                className='cursor__pointer'
                onClick={() => navigate('/login')}
              >
                Already have a account.
              </h4>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
