import React from 'react';
import NavItems from './NavItems/NavItems';
import classes from './NavBar.css';

const Navbar = () => {
  return <div className={classes.NavBar}><NavItems /></div>;
}
export default Navbar;