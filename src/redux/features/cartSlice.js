import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const find = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find >= 0) {
        state.cartItem[find].quantity += 1;
      } else {
        state.cartItem.push(action.payload);
      }
    },
    REMOVE_ITEM_CART: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
    },
    INCREASE_CART_QANTITY: (state, action) => {
      const find = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      if (find >= 0) {
        state.cartItem[find].quantity += 1;
      }
    },
    DEINCREASE_CART_QANTITY: (state, action) => {
      const find = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      if (find >= 0 && state.cartItem[find].quantity > 1) {
        state.cartItem[find].quantity -= 1;
      } else if (find >= 0 && state.cartItem[find].quantity === 1) {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    TOTAL: (state) => {
      state.total = state.cartItem.reduce(
        (pre, item) => pre + item?.quantity * item?.price,
        0
      );
    },
  },
});

export const cartSelector = (state) => state.cart;

export const {
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  INCREASE_CART_QANTITY,
  DEINCREASE_CART_QANTITY,
  TOTAL,
} = cartSlice.actions;

export default cartSlice.reducer;
