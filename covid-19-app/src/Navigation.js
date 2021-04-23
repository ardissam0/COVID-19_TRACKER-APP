import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
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
          <Link style ={{textDecoration: 'None'}} to="/About"><p>About</p></Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
