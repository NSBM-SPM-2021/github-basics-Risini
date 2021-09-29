import React from 'react';
import _ from 'lodash';
import { Container } from 'reactstrap';
import AddAppointment from './AddAppointment';
import './NewAppointment.css';

function Appointment() {
        return (
          <>
            <Container>
            <div className='form-container'>
            <div className='form-content-left'>
              <img className='form-img' src='images/Doc2.svg' alt='Appointment' />
              </div>
              <AddAppointment/>
              </div>
            </Container>
          </>
        );
      }

export default Appointment;