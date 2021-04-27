import React from 'react';
import Logout from './Logout';
import fire from './fire';
import { Link } from 'react-router-dom';

const Navigation = () => {

  const handleLogout = () => {
    fire.auth().signOut();
};

  return (
    <div>
      <div className="navigation">
        <div className="navLink">
          <Link style ={{textDecoration: 'None'}} to="/"><p>COVID-19 TRACKER</p></Link>
        </div>
        <div className="navLink">
          <Link style ={{textDecoration: 'None'}} to="/US"><p>United States</p></Link>
        </div>
        <div className="navLink">
          <Link style ={{textDecoration: 'None'}} to="/Weather"><p>Weather</p></Link>
        </div>
        <div className="navLink">
          <Link style ={{textDecoration: 'None'}} to="/About"><p>About</p></Link>
        </div>
        <div className="navLink">
          <Link style ={{textDecoration: 'None'}} to="/Login"><Logout handleLogout={handleLogout} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
