import React from 'react';
import classes from './NavItem.css';

const Navitem = props => {
  return (
  <li className={classes.NavItem}>{props.children}</li>
  )
};

export default Navitem;