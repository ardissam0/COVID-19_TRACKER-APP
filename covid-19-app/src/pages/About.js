import React, {useState, useEffect} from 'react';
import '../CSS/App.css';

function About() {

  return (
    <div className='mainPage__style'>
      <div className="textbox">
          <ul>
              <li><p>About Us</p></li>
              <li>This app was built to show realtime data about the COVID-19 virus.</li>
              <li>It uses data from an API called disease.sh Docs.</li>
              <li>Check out the US data only and search for your state.</li>
              <li>You can also check the weather by typing in the city and country.</li>
          </ul>
        </div>
      </div>
  );
};

export default About;