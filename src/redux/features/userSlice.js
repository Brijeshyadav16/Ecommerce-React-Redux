import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: JSON.parse(localStorage.getItem('user')) || {},
  token: JSON.parse(localStorage.getItem('token')) || null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LOGIN_USER: (state, action) => {
      state.currentUser = action.payload;
    },
    TOKEN: (state, action) => {
      state.token = action.payload;
    },
    LOG_OUT: (state) => {
      state.token = null;
      state.currentUser = null;
      localStorage.clear();
    },
  },
});

export const { LOGIN_USER, TOKEN, LOG_OUT } = userSlice.actions;

export const userSelector = (state) => state.user;

export default userSlice.reducer;
