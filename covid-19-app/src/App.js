import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./providers";
import PrivateRoute from './components/PrivateRoute';
import { Link } from 'react-router-dom';
import fire from './config/fire';

import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";
import Navigation from './components/Navigation';
import Weather from './pages/Weather';
import Home from './pages/Home';
import About from './pages/About';
import US from './pages/US';
import "leaflet/dist/leaflet.css";

import './CSS/App.css';

function App() {

  return (
      <div className="App__main">
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
            <div className="footer-container">
              <footer>
                    <div className="navigation-footer">
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
                      <button className="Logout__button-footer" onClick={() => fire.auth().signOut()}>Log Out</button>
                    </div>
                  </div>
                  <span>&copy; Copyright {(new Date().getFullYear())} COVID-19 TRACKER</span>
                  <br/>
                  <br/>
                  <br/>
              </footer>
        </div>  
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
