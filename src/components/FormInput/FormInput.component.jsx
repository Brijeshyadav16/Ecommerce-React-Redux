import React from 'react';

const FormInput = (otherProps) => {
  return (
    <>
      <input {...otherProps} className='form__control' />
    </>
  );
};

export default FormInput;
