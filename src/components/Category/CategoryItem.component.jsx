import React from 'react';

import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ imageUrl, title }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/product/single/${title.toLowerCase()}`);
  };

  return (
    <>
      <div
        className='category cursor__pointer'
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={() => handleRedirect()}
      >
        <div>
          <div className='category__body'>
            <h1>{title}</h1>
            <h3>SHOP NOW</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
