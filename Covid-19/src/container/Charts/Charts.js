import React, { useEffect, useState } from "react";
import Holder from "../../Hoc/holder";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "react-chartjs-2";
import classes from "./Charts.css";

const Coronachart = () => {
  const [graphData, setGraphData] = useState([]);
  const [graphType, setGraphType] = useState("Confirmed");

  useEffect(() => {
    // https://pomber.github.io/covid19/timeseries.json
    // https://covidapi.info/api/v1/country/IND
    axios
      .get("https://pomber.github.io/covid19/timeseries.json")
      .then((response) => {
        const country = Object.keys(response.data);
        const totalDays = response.data[country[0]].length;
        const totalCountries = country.length;
        const finalData = [];
        for (let i = 0; i < totalDays; i++) {
          let date = response.data[country[0]][i].date;
          let groupedObj = { date: date };
          let totalCases = 0;
          let totalRecovered = 0;
          let totalDeath = 0;
          for (let j = 0; j < totalCountries; j++) {
            totalCases += response.data[country[j]][i].confirmed;
            totalRecovered += response.data[country[j]][i].recovered;
            totalDeath += response.data[country[j]][i].deaths;
          }
          groupedObj["Confirmed"] = totalCases;
          groupedObj["Recovered"] = totalRecovered;
          groupedObj["Deaths"] = totalDeath;
          finalData.push(groupedObj);
        }
        setGraphData(finalData);
      });
  }, []);

  return (
    <div className={classes.Chart}>
      <Holder>
        <div className={classes.GraphHeading}>
          <div>

            <p>Spread Trends</p>
         
          </div>
          <div className={classes.GraphButtonsContent}>
            <button
              className={
                graphType === "Confirmed"
                  ? [classes.GraphButton, classes.Active].join(" ")
                  : classes.GraphButton
              }
              onClick={() => setGraphType("Confirmed")}
            >Confirmed</button>

            <button
              className={
                graphType === "Recovered"
                  ? [classes.GraphButton, classes.Active].join(" ")
                  : classes.GraphButton
              }
              onClick={() => setGraphType("Recovered")}
            >Recovered</button>

            <button
              className={
                graphType === "Deaths"
                  ? [classes.GraphButton, classes.Active].join(" ")
                  : classes.GraphButton
              }
              onClick={() => setGraphType("Deaths")}
            >Deceased</button>

          </div>
        </div>
        <div className={classes.Graph}>
          <LineChart width={300} height={151} data={graphData} >
            <YAxis tick={{ fontSize: "12px" }} orientation="right" padding-bottom="10"/>
            <Tooltip />
            <Line
              type="monotone"
              dataKey={graphType}
              stroke="#FF6C75"
              strokeWidth={2}
              dot={false}
            />
            <XAxis dataKey="date" tick={{ fontSize: "12px" }} padding={{ right: 10 }}/>
          </LineChart>
        </div>
      </Holder>
    </div>
  );
};

export default Coronachart;
