import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import Appointment from './components/pages/MakeAppointment/Appointment'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/appointment' component={Appointment} />
        {/* <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;