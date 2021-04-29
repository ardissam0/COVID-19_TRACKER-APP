import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./providers";
import PrivateRoute from './components/PrivateRoute';

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
