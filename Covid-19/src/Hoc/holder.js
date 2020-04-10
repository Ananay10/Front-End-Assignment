import React from 'react';
import classes from './holder.css';

const holder = props => {
  return (
    <div className={classes.Card}>
      {props.children}
    </div>
  );
};

export default holder;