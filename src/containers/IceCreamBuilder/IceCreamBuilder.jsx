import React, { Component } from 'react';
// @ts-ignore
import classes from './IceCreamBuilder.module.css';
import IceCream from '../../components/IceCream/IceCream';
import Builder from '../../components/Builder/Builder';
import Scoop from '../../components/IceCream/Scoop/Scoop';

class IceCreamBuilder extends Component {
  state = {
    items: {
      vanilla: 45,
      chocolate: 50,
      lemon: 42,
      orange: 43,
      strawberry: 47,
    },
    scoops: [],
    totalPrice: 0,
  };

  addScope = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoops = [...scoops];
    workingScoops.push(scoop);
    this.setState((prevState) => {
      return {
        scoops: workingScoops,
        totalPrice: prevState.totalPrice + items[scoop],
      };
    });
  };

  removeScope = (scoop) => {
    const { scoops, items } = this.state;
    const workingScoops = [...scoops];
    const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);
    workingScoops.splice(scoopIndex, 1);
    this.setState((prevState) => {
      return {
        scoops: workingScoops,
        totalPrice: prevState.totalPrice - items[scoop],
      };
    });
  };

  render() {
    const { items, totalPrice, scoops } = this.state;
    return (
      <div className={['container', classes.container].join(' ')}>
        <IceCream scoops={scoops} />
        <Builder
          items={items}
          price={totalPrice}
          add={this.addScope}
          remove={this.removeScope}
        />
      </div>
    );
  }
}

export default IceCreamBuilder;
