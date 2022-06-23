import React from 'react';

import { useDispatch } from 'react-redux';

import Button from '../Button/Button.component';

import { ADD_TO_CART } from '../../redux/features/cartSlice';

const ProductCard = ({ name, price, img, id }) => {
  const dispatch = useDispatch();

  return (
    <div className='card'>
      <div className='card__body' style={{ backgroundImage: `url(${img})` }}>
        <div className='button__center'>
          <Button
            buttonType='inverted'
            onClick={() => {
              dispatch(ADD_TO_CART({ name, price, img, id, quantity: 1 }));
            }}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
      <div className='flex space__between align__items__center card__footer mt__2'>
        <h4>{name}</h4>
        <h4>{price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
