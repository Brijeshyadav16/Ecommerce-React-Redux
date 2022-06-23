import { APP_USER_DATA } from '../../utils/data/AppData';

const LOGIN_API = ({ email, password }) => {
  const check = APP_USER_DATA.find(
    (item) => item.email === email && item.password === password
  );
  if (check) {
    return {
      status: 1,
      message: 'User login successfully !',
      data: check,
      token: 'abcd',
    };
  } else {
    throw new Error('User is not authorized !');
  }
};

const SIGNUP_API = ({ email, password, displayName }) => {
  const check = APP_USER_DATA.find(
    (item) => item.email === email && item.password === password
  );
  if (check) {
    throw new Error('This user is already exist !');
  } else {
    return {
      status: 1,
      message: 'User create successfully !',
      data: { email, password, displayName },
      token: 'abcd',
    };
  }
};

export const LOGIN = {
  LOGIN_API,
  SIGNUP_API,
};
