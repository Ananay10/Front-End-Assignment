import React from "react";
import Navbar from "./components/NavBar/NavBar";
import Countries from "./container/Countries/Countries";
import Currentcases from "./container/Cases/Cases";
import WorldMap from './container/WorldMap/Worldmap';
import classes from './App.css';
// import Coronachart from './container/Charts/Charts';
import NewsSection from './container/News/News';
import RecoveryRatio from './container/RecoveryRatio/Recovery';
import TwitterFeed from './container/Twitter /Twitter';

const app = () => {
  return (
    <div>
      <Navbar />
      <Currentcases />
      <div className={classes.MiddleContent}>
      <Countries />
      <WorldMap />
      <RecoveryRatio />
    
      </div>
     <div className={classes.ChartReport}>
     {/* <Coronachart />  */}
     <NewsSection />
     <TwitterFeed />
     </div> 
    
    </div>
  );
};

export default app;
