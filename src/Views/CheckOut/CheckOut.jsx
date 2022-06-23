import React, { useEffect } from 'react';

import CheckOutItem from '../../components/CheckOut/CheckOutItem.component';

import { useSelector, useDispatch } from 'react-redux';

import {
  REMOVE_ITEM_CART,
  INCREASE_CART_QANTITY,
  DEINCREASE_CART_QANTITY,
  TOTAL,
} from '../../redux/features/cartSlice';

const CheckOut = () => {
  const dispatch = useDispatch();

  const { cartItem, total } = useSelector((state) => state.cart);

  const removeItem = (id) => dispatch(REMOVE_ITEM_CART(id));

  const increaseQuantity = (id) => dispatch(INCREASE_CART_QANTITY(id));

  const decreaseQuantity = (id) => dispatch(DEINCREASE_CART_QANTITY(id));

  useEffect(() => {
    dispatch(TOTAL());
  }, [cartItem, dispatch]);

  return (
    <div className='container'>
      <div className='checkout flex justify__center flex__direction__column'>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Descrition</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItem?.map((item) => {
              return (
                <CheckOutItem
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  removeItem={removeItem}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              );
            })}
          </tbody>
        </table>
        <hr className='my__2' />
        <div className='flex justify__end pb__5'>
          <h2>Total : ₹{total}</h2>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
