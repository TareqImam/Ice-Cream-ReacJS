import React from 'react';
// @ts-ignore
import classes from './TotalPrice.module.css';

const TotalPrice = () => {
  return (
    <div className={classes.total}>
      <div>Total Price</div>
      <div>3000.00 Tk</div>
    </div>
  );
};

export default TotalPrice;
