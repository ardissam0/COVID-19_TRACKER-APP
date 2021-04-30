import React, {useState, useEffect} from 'react';
import '../CSS/App.css';

function About() {

  return (
    <div className='mainPage__style'>
      <div className="textbox">
          <ul>
              <li><p>About Us</p></li>
              <li>This app was built to show realtime data about the COVID-19 virus.</li>
              <li>It uses realtime data from an open API called disease.sh Docs.</li>
              <li>Check the weather by typing in the city and country.</li>
              <li>Stay tuned for new updates to the app that includes: travel and more information.</li>
          </ul>
        </div>
      </div>
  );
};

export default About;