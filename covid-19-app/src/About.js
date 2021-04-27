import React, {useState, useEffect} from 'react';
import './App.css';

function About() {
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
      <div className="textbox">
          <ul>
              <li>This app was built to show realtime data about the COVID-19 virus.</li>
              <li>It uses realtime data from an open API called disease.sh Docs.</li>
              <li>Check the weather by typing in the city and country.</li>
              <li>Stay tuned for new updates to the app that includes: travel and more information.</li>
          </ul>
      </div>
    </div>
</div>
  );
};

export default About;