import React from 'react';

import { useNavigate } from 'react-router-dom';

import ProductCard from '../../components/Product/ProductCard.component';

import { SHOP_DATA } from '../../utils/data/AppData';

const Product = () => {
  const navigate = useNavigate();
  const category = SHOP_DATA;

  return (
    <div className='container'>
      {category.map((item, i) => {
        return (
          <div key={i}>
            <h2
              className='mb__5 pl__2 cursor__pointer'
              onClick={() =>
                navigate(`/product/single/${item.title.toLowerCase()}`)
              }
            >
              {item.title.toLocaleUpperCase()}
            </h2>
            <div className='flex align__items__center flex__wrap space__between'>
              {category[i].items
                .filter((_, idx) => idx < 3)
                .map((product) => {
                  return (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      img={product.imageUrl}
                      name={product.name}
                      price={product.price}
                    />
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
