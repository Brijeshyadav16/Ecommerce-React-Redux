import React from 'react';

import { useParams } from 'react-router-dom';

import ProductCard from '../../components/Product/ProductCard.component';

import { SHOP_DATA } from '../../utils/data/AppData';

const SingleProduct = () => {
  const { name } = useParams();

  const filter = SHOP_DATA.filter((item) => item.title.toLowerCase() === name);

  return (
    <>
      <div className='container'>
        <h1 className='my__3 text__align__center'>{filter[0]?.title}</h1>
        <div className='flex align__items__center flex__wrap space__between'>
          {filter[0].items?.map((product) => {
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
    </>
  );
};

export default SingleProduct;
