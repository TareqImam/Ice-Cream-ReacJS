import React from 'react';
// @ts-ignore
import classes from './Builder.module.css';
import Items from './Items/Items';
import TotalPrice from './TotalPrice/TotalPrice';
import Modal from './Modal/Modal';

const Builder = ({ items, price, add, remove, scoops }) => {
  return (
    <div>
      <div className="builder">
        <h3>Build your own Ice Cream Sundae</h3>
        <Items items={items} add={add} remove={remove} scoops={scoops} />
        <TotalPrice price={price} />
        <button type="button" className={[classes.order, 'rounded'].join(' ')}>
          Add to Cart
        </button>
      </div>
      <Modal>Hello Modal</Modal>
    </div>
  );
};

export default Builder;
