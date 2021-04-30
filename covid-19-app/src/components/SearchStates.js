import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import numeral from "numeral";

import styled from "styled-components";

import '../CSS/Table.css';
import '../CSS/App.css';

const SearchHolder =styled.div `
  align-items: center;
  padding: 2rem;
  margin-left: 1rem;
  padding-left: 2rem;
  width: 50%;
  font-size: 1.2rem;
  @media(max-width:990px) {
    width: 98%;
    margin-top: 3%;
  }
`;

const StateHolder = styled.div `
    display: flex;
    margin: 1%;
    padding: 2%;
    border-radius: 10px;
    width: 17%;
    box-shadow: 0 8px 17px rgba(170, 170, 170, 0.8), 0 17px 14px rgba(170, 170, 170, 0.22);
    @media(max-width:900px) {
      padding: 3%;
      margin-bottom: 30px;
      width: 45%;
    }
    @media(max-width:600px) {
      width: 90%;
    }
`;


const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
`;


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
      <SearchHolder>
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
      </SearchHolder>
        <Wrapper>
            {searchResult.map(rec => (
                <StateHolder rec={rec} key={rec.id}>
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
                    </StateHolder>
                        ))}
            </Wrapper>
    </section>
  );
 };