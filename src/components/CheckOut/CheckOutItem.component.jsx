import React from 'react';

const CheckOutItem = ({
  id,
  img,
  name,
  quantity,
  price,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <tr>
      <td>
        <img src={img} alt='cart' width='80px' />
      </td>
      <td>{name}</td>
      <td>
        <div className='flex justify__center'>
          <button className='px__2' onClick={() => increaseQuantity(id)}>
            +
          </button>
          <h5 className='mx__2'>{quantity}</h5>
          <button className='px__2' onClick={() => decreaseQuantity(id)}>
            -
          </button>
        </div>
      </td>
      <td>{price}</td>
      <td onClick={() => removeItem(id)} className='cursor__pointer'>
        &#10060;
      </td>
    </tr>
  );
};

export default CheckOutItem;
