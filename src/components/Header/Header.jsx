import React from 'react';
// @ts-ignore
import classes from './Header.module.css';
// @ts-ignore
import logo from '../../assets/images/logo.svg';
// @ts-ignore
import reactLogo from '../../assets/images/react.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <img className={classes.logo} src={logo} alt="Logo" />
        </div>
        <div className="textRight">
          <img src={reactLogo} alt="React" className={classes.reactLogo} />
          <strong>React</strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
