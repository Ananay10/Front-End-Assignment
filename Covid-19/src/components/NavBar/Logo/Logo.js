import React from "react";
import CovidLogo from "../../../assets/covid.svg";
import classes from './Logo.css';

const covidlogo = () => {
  return (
    <div>
      <img src={CovidLogo}/>
      <h3 className={classes.Logo}>COVID'19</h3>
    </div>
  );
};

export default covidlogo;
