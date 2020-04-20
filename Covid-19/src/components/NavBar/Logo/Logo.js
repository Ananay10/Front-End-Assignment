import React from "react";
import CovidLogo from "../../../assets/covid.svg";
import classes from './Logo.css';

const covidlogo = () => {
  return (
    <div className={classes.Logo}>
      <img src={CovidLogo}/>
      <span className={classes.LogoText}>COVID'19</span>
    </div>
  );
};

export default covidlogo;
