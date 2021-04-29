import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
import SearchStates from './SearchStates';
import Table2 from './Table2';
import './App.css';

function US() {
    const [states, setStates] = useState([]);
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
    axios.get("https://disease.sh/v3/covid-19/states/")
    .then(response => {
        console.log(response.data)
        setStates(response.data)
    })
    .catch(error => console.log(error));
  }, []);


  return (
          <div className={darkMode ? "dark-mode" : "light-mode"}>
              <div className="app__left-US">
                <div className="app__header">
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
                        </div>
                </div>
                    <Card>
                      <CardContent>
                            <h3>Live Cases by State</h3>
                            <Table2 states={states} setStates={setStates}/>
                      </CardContent>
                    </Card>
              </div>
                    <Card className="search__states">
                      <CardContent>
                            <SearchStates states={states} setStates={setStates}/>
                      </CardContent>
                    </Card>
          </div>
  );
};

export default US;