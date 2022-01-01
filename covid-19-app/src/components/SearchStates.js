import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import numeral from "numeral";

import '../CSS/Table.css';
import '../CSS/App.css';



export default function SearchStates( { states }) {
  const [searchSomething, setSearchSomething] = useState('');
  const [searchResult, setSearchResult] = useState(states);
  
  const handleInputChange = e => {
    e.preventDefault();
    e.stopPropagation();
    setSearchSomething(e.target.value);
  };
 
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
  }

  useEffect(() => {
    const results = states.filter(rec =>
      rec.state.toLowerCase().includes(searchSomething.toLowerCase())
      );
      setSearchResult(results);

  }, [searchSomething, states]);

  return (
    <section className="state-list">
      <div className="search-holder">
        <form onSubmit={handleSubmit} className="search">
            <label htmlFor="search">Search:</label>
            <input
                    type='text' 
                    placeholder='Enter State' 
                    onChange={handleInputChange}
                    className="prompt search-name"
                    autoComplete="off" 
                />
        </form>
      </div>
        <div className="state-results">
            {searchResult.map(rec => (
                <div className= "state-holder" rec={rec} key={rec.id}>
                    <Card className="stateCard">
                    <CardBody>
                        <CardTitle>
                        <h2>{rec.state}</h2>
                        </CardTitle>
                        <CardSubtitle>
                        <span>Population: <p>{numeral(rec.population).format("0.0a")}</p></span>
                        </CardSubtitle>
                        <CardSubtitle>
                        <span>Tests: <p>{numeral(rec.tests).format("0.0a")}</p></span>
                        </CardSubtitle>
                        <CardSubtitle>
                        <span>Infected: <p>{numeral(rec.cases).format("0.0a")}</p></span>
                        </CardSubtitle>
                        <CardSubtitle>
                        <span>Deaths: <p>{numeral(rec.deaths).format("0.0a")}</p></span>
                        </CardSubtitle>
                    </CardBody>
                    </Card>
                    </div>
                        ))}
            </div>
    </section>
  );
 };