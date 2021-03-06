import React, {useState, useEffect} from 'react';
import InfoBox from '../components/InfoBox';
import Map from '../components/Map';
import Table from '../components/Table';
import LineGraph from '../components/LineGraph';
import "leaflet/dist/leaflet.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {sortData, prettyPrintStat} from '../components/util';
import numeral from 'numeral';

import '../CSS/App.css';

function Home() {
  const [countries, setCountries] = useState([]);
  const [country, setInputCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] =
  useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

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
      setMapZoom(5);
    }))
  }

  return (
    <div className='mainPage__style'>
        <div className="app__left">
          <div className="app__header">
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

export default Home;