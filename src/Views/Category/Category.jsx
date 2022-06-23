import React from 'react';

import CategoryItem from '../../components/Category/CategoryItem.component';

import { CATEGORY_DATA } from '../../utils/data/AppData';

const Category = () => {
  const category = CATEGORY_DATA;
  return (
    <>
      <div className='container'>
        <div className='flex flex__wrap space__between'>
          {category.map((item) => {
            return (
              <CategoryItem
                key={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
