import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import US from './US';
import "leaflet/dist/leaflet.css";

import './App.css';

function App() {
  return (
    <div>
      <div className="Navbar">
        <Navigation />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/US' component={US} />
        <Route path='/About' component={About} />
        </Switch>
      </div>
      <div>
        <footer>&copy; Copyright {(new Date().getFullYear())} COVID-19 TRACKER</footer>
      </div>  
    </div>
  );
};

export default App;
