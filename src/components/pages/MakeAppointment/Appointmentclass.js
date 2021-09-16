import React, { Component } from 'react';
import _ from 'lodash';
import { Container } from 'reactstrap';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

class Appointment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        appointments: [],
        showAddBody: false,
        orderBy: 'patientName',
        orderDir: 'asc',
        searchText: '',
      };
  
      
    return (
        <>
          <NavBar />
          <Container>
            
          </Container>
          <Footer />
        </>
      );
    }
  }
  
  export default Appointment;