import React from 'react';
import classes from './holder.css';

const holder = props => {
  return (
    <div className={classes.Holder}>
      {props.children}
    </div>
  );
};

export default holder;