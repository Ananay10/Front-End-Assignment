import React from "react";
import Navbar from "./components/NavBar/NavBar";
import Countries from "./container/Countries/Countries";
import Currentcases from "./container/Cases/Cases";
import WorldMap from './container/WorldMap/Worldmap';
import classes from './App.css';

const app = () => {
  return (
    <div>
      <Navbar />
      <Currentcases />
      <div className={classes.ListnMap}>
      <Countries />
      <WorldMap />
    
      </div>
    </div>
  );
};

export default app;
