import React, { useState, useEffect } from "react";
import Holder from "../../Hoc/holder";
import classes from "./Cases.css";
import axios from "axios";
import RedGraph from '../../assets/Graph.svg';  
import GreenGraph from '../../assets/gren.svg'; 

const Currentcases = (props) => {
  const [cases, setCases] = useState([]);

  const formatCases = (caseCount) => {
    return caseCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    // curl --location --request GET 'https://apigw.nubentos.com:443/t/nubentos.com/ncovapi/1.0.0/cases?country=%3Cstring%3E'
    // https://api.thevirustracker.com/free-api?global=stats
    // https://pomber.github.io/covid19/timeseries.json
    axios.get("https://corona.lmao.ninja/v2/all").then((response) => {
      let fetchedData = response.data;
      let updatedCases = [
        ...cases,
        {
          heading: "Total Cases",
          casesCount: formatCases(fetchedData.updated),
        },
        {
          heading: "Active Cases",
          casesCount: formatCases(fetchedData.active),
        },
        {
          heading: "Recovered",
          casesCount: formatCases(fetchedData.recovered),
        },
      
        {
          heading: "Total Deaths",
          casesCount: formatCases(fetchedData.deaths),
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
            <span className={classes.CaseGraph}>
            {(() => {
        switch (item.heading) {
          case item.heading[0]:   <img src={GreenGraph} />;
          case "Total Cases": <img src={RedGraph} />;
          case "Active Cases":  <img src={RedGraph} />;
          default:      return "#FFFFFF";
        }
      })()}
{/* {item.heading="Recovered" ? <img src={GreenGraph} alt='greeen'/>
 : <img src={RedGraph} alt='red' /> } */}
      </span> 
          </div>
        </Holder>
      ))}
    </div>
  );
};

export default Currentcases;
