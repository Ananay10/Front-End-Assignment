import React, { useState, useEffect } from "react";
import mapData from "./Mapdata";
import Holder from "../../Hoc/holder";
import classes from "./Worldmap.css";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


require("highcharts/modules/map")(Highcharts);

const WorldMap = () => {
  const [countriesArray, setCountriesArray] = useState([]);

  useEffect(() => {
    // "https://corona.lmao.ninja/countries?sort=country"
    // https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats
    axios
      .get("https://corona.lmao.ninja/countries?sort=country")
      .then((response) => {
        let convertedArray = [];
        response.data.map((country) => {
          if (country.countryInfo.iso2) {
            let countryArray = new Array(
              country.countryInfo.iso2.toLowerCase(),
              country.cases
            );
            convertedArray.push(countryArray);
          }
          return convertedArray;
        });
        setCountriesArray(convertedArray);
      }).catch((e) => {
        console.log(`Failed to fetch countries: ${e.message}`, e);
        return;
      });
  }, []);

  const Mapicons = {
    chart: {
      backgroundColor: 'black',
    },
    title: {
      text: "",
    },
  
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
        // float: "right",
      },
    },
   

    series: [
      {
        mapData: mapData,
        name: "Country",
        data: countriesArray,
      },
    ],
  };

  return (
    <div className={classes.WorldMap}>
      <Holder>
        <div className={classes.MapHeading}>
          <div style={{ fontWeight: "bold" }}>COVID-19 Affected Areas</div>
          <div className={classes.SideHeading}>
            <div>
              <span className={classes.Most}></span> Most Affected
            </div>
            <div>
              <span className={classes.Least}></span> Least Affected
            </div>
          </div>
        </div>
        <div className={classes.Map}>
          <HighchartsReact
            options={Mapicons}
             constructorType={"mapChart"}
            highcharts={Highcharts}
            /> 
        </div>
      </Holder>
    </div>
  );
};

export default WorldMap;
