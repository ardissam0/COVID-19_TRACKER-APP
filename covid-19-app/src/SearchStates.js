import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import numeral from "numeral";

import styled from "styled-components";

import './Table.css';
import './App.css';

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


export default function SearchStates(props) {
  const [searchSomething, setSearchSomething] = useState('');

  useEffect(() => {
    const results = props.states.filter(rec =>
      rec.state.toLowerCase().includes(searchSomething.toLowerCase())
      );
      props.setStates(results);

  }, [searchSomething]);

  
  const handleInputChange = event => {
    setSearchSomething(event.target.value);
  };
 
  return (
    <section className="state-list">
      <SearchHolder>
        <form className="search">
            <label htmlFor="search">Search States:&#8201;
                <input 
                    id="search"
                    type='text' 
                    placeholder='Enter State' 
                    value={searchSomething}
                    onChange={handleInputChange}
                    name="name"
                    tabIndex="0"
                    className="prompt search-name"
                    autoComplete="off" 
                    />
            </label>
        </form>
      </SearchHolder>
        <Wrapper>
            {props.states.map(item => (
                <StateHolder key={item.id}>
                    <Card className="stateCard">
                    <CardBody>
                        <CardTitle>
                        <h2>{item.state}</h2>
                        </CardTitle>
                        <CardSubtitle>
                        <span>Population: <p>{numeral(item.population).format("0.0a")}</p></span>
                        </CardSubtitle>
                        <CardSubtitle>
                        <span>Tests: <p>{numeral(item.tests).format("0.0a")}</p></span>
                        </CardSubtitle>
                        <CardSubtitle>
                        <span>Infected: <p>{numeral(item.cases).format("0.0a")}</p></span>
                        </CardSubtitle>
                        <CardSubtitle>
                        <span>Deaths: <p>{numeral(item.deaths).format("0.0a")}</p></span>
                        </CardSubtitle>
                    </CardBody>
                    </Card>
                    </StateHolder>
                        ))}
            </Wrapper>
    </section>
  );
}