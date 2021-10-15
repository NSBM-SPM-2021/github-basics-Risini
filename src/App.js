import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import Home from './components/pages/HomePage/Home';
import Appointment from './components/pages/MakeAppointment/Appointmentclass';
// import Result from './components/pages/ResultPage/Result';
import DisplayResult from './components/pages/ResultPage/DisplayResult';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/appointment' component={Appointment} />
        {/* <Route path='/Result' exact component={Result} /> */}
        <Route path='/DisplayResult' exact component={DisplayResult} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;