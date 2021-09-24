import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import Home from './components/pages/HomePage/Home';
import Appointment from './components/pages/MakeAppointment/Appointmentclass';
import Result from './components/pages/ResultPage/Result';
import GetFirebase from './GetFirebase';
import SnapshotFirebase from './SnapshotFirebase';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/appointment' component={Appointment} />
        {get ? <GetFirebase /> : <SnapshotFirebase />}
        <SnapshotFirebaseAdvanced />
        <Route path='/Result' exact component={Result} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;