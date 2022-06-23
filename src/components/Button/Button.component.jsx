import React from 'react';

const buttonTypeObject = {
  google: 'google__btn__style',
  inverted: 'inverted__btn__style',
};

const Button = ({ children, buttonType, className, ...otherProps }) => {
  return (
    <>
      <button
        className={`btn__style ${buttonTypeObject[buttonType]} ${className}`}
        {...otherProps}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
