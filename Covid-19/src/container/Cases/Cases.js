import React, { useState, useEffect } from "react";
import Holder from "../../Hoc/holder";
import classes from "./Cases.css";
import axios from "axios";

const Currentcases = (props) => {
  const [cases, setCases] = useState([]);

  const formatCases = (caseCount) => {
    return caseCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    // curl --location --request GET 'https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0/cases?country=%3Cstring%3E'
    // https://api.thevirustracker.com/free-api?global=stats
    axios.get("https://api.thevirustracker.com/free-api?global=stats").then((response) => {
      let fetchedData = response.data.results[0];
      let updatedCases = [
        ...cases,
        {
          heading: "Total Cases",
          casesCount: formatCases(fetchedData.total_cases),
        },
        {
          heading: "Active Cases",
          casesCount: formatCases(fetchedData.total_active_cases),
        },
        {
          heading: "Recovered",
          casesCount: formatCases(fetchedData.total_recovered),
        },
      
        {
          heading: "Total Deaths",
          casesCount: formatCases(fetchedData.total_deaths),
        },
      ];
      setCases(updatedCases);
    })
    .catch(err => console.log('error in fetching data'));
  }, []);

  return (
    <div className={classes.CurrentSituations}>
      {cases.map((item) => (
        <Holder key={item.heading}>
          <div className={classes.CaseHolder}>
            <span>
              <span className={classes.CaseHeading}>{item.heading}</span>
              <span className={classes.CaseNumber}>{item.casesCount}</span>
            </span>
            <span className={classes.CaseGraph}></span>
          </div>
        </Holder>
      ))}
    </div>
  );
};

export default Currentcases;
