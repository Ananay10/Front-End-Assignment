import React from "react";
import classes from "./Layout.css";
import CurrentCases from "../Cases/Cases";
import Countries from "../Countries/Countries";
import WorldMap from "../WorldMap/Worldmap";
import Coronachart from "../Charts/Charts";
import TwitterCol from "../Twitter /Twitter";
import NewsUpdate from '../News/News';
import RecoveryRatio from '../RecoveryRatio/Recovery';

const layout = () => {
  return (
    <div className={classes.Layout}>
      <div className={classes.Container}>
        <div className={classes.Main}>
          <div className={classes.CasesSec}>
            <CurrentCases />
            <div className={classes.MiddleContent}>
              <Countries />
              <WorldMap />
            </div>
            
            <div className={classes.LowerCol}>
              <Coronachart />
              <NewsUpdate />
            </div>
            </div>
            <div className={classes.RightCol}>
            <div className={classes.RatioTweet}>
              <RecoveryRatio />
            <div className={classes.tweet}>
              <TwitterCol /> </div>
            </div>
          </div>
          </div>

         
        </div>
      </div>
  );
};

export default layout;
