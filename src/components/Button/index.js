import React from 'react';
import classes from './button.module.scss';

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {label}
    </button>
  );
};

export default Button;
