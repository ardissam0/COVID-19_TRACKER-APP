import React, {useState, useEffect} from 'react';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import LineGraph from './LineGraph';
import "leaflet/dist/leaflet.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {sortData, prettyPrintStat} from './util';
import numeral from 'numeral';

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setInputCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] =
  useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }


  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data)
    })
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          
          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
      });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url = countryCode === 'worldwide' 
    ? 'https://disease.sh/v3/covid-19/all' 
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
    .then(response => response.json()
    .then(data => {
      setInputCountry(countryCode);
      setCountryInfo(data);
      setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      setMapZoom(4);
    }))
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="app__left">
          <div className="app__header">
            <h1>COVID-19 TRACKER</h1>
            <div className="toggle-container">
              <span style={{ color: darkMode ? "yellow" : "grey" }}>☀︎</span>
              <span className="toggle">
                <input
                  checked={darkMode}
                  onChange={() => setDarkMode(prevMode => !prevMode)}
                  id="checkbox"
                  className="checkbox"
                  type="checkbox"
                />
                <label htmlFor="checkbox" />
              </span>
              <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
              {/* <button onClick={() => setDarkMode(prevMode => !prevMode)}>
              Toggle
            </button> */}
            </div>
            <FormControl className="app__dropdown">
              <Select variant='outlined' value={country} onChange={onCountryChange}>
              <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map((country) => (
                    <MenuItem value={country.value}>{country.name}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>

          <div className="app__stats">
            <InfoBox 
            onClick={(e) => setCasesType("cases")}
            isRed
            activeC={casesType === "cases"}
            title = "Cases" 
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")}/>
            <InfoBox 
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            activeR={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}/>
            <InfoBox 
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            isBlack
            activeD={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)} 
            total={numeral(countryInfo.deaths).format("0.0a")}/>
          </div>

          <Map 
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
          />

          </div>
          <Card className="app__right">
            <CardContent>
                  <h3>Live Cases by Country</h3>
                  <Table countries={tableData} />
                  <h3 className= "app__graphTitle">Worldwide new {casesType}</h3>
                  <LineGraph className="app__graph" casesType={casesType}/>
            </CardContent>
          </Card>
        </div>
  );
};

export default App;
