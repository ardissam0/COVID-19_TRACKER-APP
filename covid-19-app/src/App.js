import React from 'react';
import Navigation from './Navigation';
import Weather from './Weather';
import Home from './Home';
import About from './About';
import US from './US';
import "leaflet/dist/leaflet.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { AuthProvider } from "./providers";
import PrivateRoute from "./PrivateRoute";


import './App.css';

function App() {
  return (
      <div className="Navbar">
      <AuthProvider>
        <Router>
        <Navigation />
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path='/US' component={US} />
            <PrivateRoute exact path='/About' component={About} />
            <PrivateRoute exact path='/Weather' component={Weather} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </AuthProvider>
       <div>
        <footer>&copy; Copyright {(new Date().getFullYear())} COVID-19 TRACKER</footer>
      </div>  
    </div>
  );
};

export default App;
