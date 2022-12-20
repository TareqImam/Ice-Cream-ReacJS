import React from 'react';
// @ts-ignore
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop';

const IceCream = () => {
  return (
    <div>
      <div className={classes.icecream}>
        <p className={classes.cone}></p>
        {/* <!-- <p>Please start adding scoops</p> --> */}
        <Scoop />
        <div className={classes.cherry}></div>
      </div>
    </div>
  );
};

export default IceCream;
