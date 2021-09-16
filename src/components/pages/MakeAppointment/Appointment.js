import React from 'react';
// import sampleimage from './Doc2.svg';

const styles = {'margin' : 'auto', 'width': '50%', 'padding': '10px', 'text-align': 'center' };

function Appointment() {
    return (
        <div style= {styles}>
            <h1>Appointment will be made.</h1>
            <img src='images/Doc2.svg' alt="Sample image" width="500" height="600" />
        </div>
    )
}

export default Appointment
