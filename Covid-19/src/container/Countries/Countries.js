import React, { useEffect, useState } from 'react';
import Searchicon from '../../assets/search.svg';
import Holder from '../../Hoc/holder';
import axios from 'axios';
import Country from './Country/Country';
import classes from './Countries.css';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

useEffect(() => {
    let updatedCountries = countries.filter(country => {
      return country.Country.toLowerCase().includes(searchFilter.toLowerCase());
    });
    setFilteredCountries(updatedCountries);
  }, [searchFilter, countries]);


useEffect(() => {
    setLoading(true);
    axios.get("https://api.covid19api.com/summary").then((response) => {
      setLoading(false);
      let fetchedData = response.data.Countries
                  .filter(country => country.TotalConfirmed > 10)
                  .sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
      setCountries(fetchedData);
    });
  }, []);

 

  const generateFlag = (countryCode) => {
    return `https://www.countryflags.io/${countryCode}/flat/32.png`;
  };

  return (
    <Holder>
      <div className={classes.CountriesList}>
        <div className={classes.SearchArea}>
          <img
            className={classes.SearchIcon}
            src={Searchicon}
            alt="search-icon"
          />
          <input
            className={classes.SearchInput}
            type="text"
            placeholder="Search Location"
            onChange={event => setSearchFilter(event.target.value.trim(''))}
          />
        </div>
        <div>
        {filteredCountries.length>=1 && !loading ? filteredCountries.map((country) => (
          <Country
              key={country.CountryCode} 
              flag={generateFlag(country.CountryCode)}
              countryName={country.Country}
              affected={country.TotalConfirmed}
              recovered={country.TotalRecovered} />
        )) : <p>{loading ? 'Loading' : 'No result found!'}</p>}
        </div>
      </div>
      </Holder>
  );
};

export default Countries;
