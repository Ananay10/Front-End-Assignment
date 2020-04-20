import React, { useEffect, useState } from "react";
import classes from "./Recovery.css";
import axios from "axios";
import Holder from "../../Hoc/holder";


const RecoveryRatio = () => {
    // https://corona.lmao.ninja/all
    // https://corona.lmao.ninja/v2/continents
  const [totalCases, setTotalCases] = useState({});
  useEffect(() => {
    axios.get("https://corona.lmao.ninja/v2/all")
    .then((response) => {
      let Datafetch = response.data;
      let Casesobj = {
        activeCases: Datafetch.active,
        recovered: Datafetch.recovered,
      };
      setTotalCases(Casesobj);
    });
  }, []);

  const formatCases = (cases) => {
    return (cases/1000).toFixed(1);
  }

  const percent = ((totalCases.recovered / totalCases.activeCases) * 100).toFixed(1);
  return (
    <Holder>
      <div className={classes.RecoveryBox}>
        <div className={classes.Heading}>Ratio of Recovery</div>
        <div className={classes.ProgressBarArea}>
          <svg>
            <circle className={classes.Path} cx="50%" cy="50%" r="80" />
            <circle
              className={classes.Progress}
              style={{
                strokeDashoffset: `calc(565 - (565 * ${percent}) / 100)`,
              }}
              cx="50%"
              cy="50%"
              r="80"
            />
          </svg>
          <div className={classes.PercentBox}>
            <h2>
              {percent} %
            </h2>
          </div>
        </div>
        <div className={classes.CountBox}>
            <div className={classes.AffectedCount}>
              {formatCases(totalCases.activeCases)}k Affected
              </div>
          <div className={classes.RecoveredCount}>
            {formatCases(totalCases.recovered)}k Recovered
            </div>
        </div>
      </div>
    </Holder>
  );
};

export default RecoveryRatio;
