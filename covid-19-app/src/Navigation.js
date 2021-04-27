import React from 'react';
import fire from "./fire";
import { Link } from 'react-router-dom';
import { useUser } from "./hooks";

const Navigation = () => {
  const user = useUser();

  return (
    <div>
      <div className="navigation">
      {user?.profile}
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
          <Link style ={{textDecoration: 'None'}} to="/signin"><button className="Logout__button" onClick={() => fire.auth().signOut()}>SignOut</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
