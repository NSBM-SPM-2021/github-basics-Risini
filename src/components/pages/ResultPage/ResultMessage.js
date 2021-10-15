import React from 'react';
import './ResultMessage.css';

function ResultMessage() {
    return (
        <div>
            <h3>Your Appointment has been made. You will be inform shortly</h3>
            <div className='pno-input'>
                <table>
                    <tr>
                        <td><label className='pno-label'>Please enter the Phone number: </label></td>
                        <td><input className='pno-inputs' type="text" placeholder="Phone Number"/></td>
                    </tr>
                </table>
            </div>
            <h3>A message will be sent to this phone number when the appointment get approved.</h3>
        </div>
        
    )
}

export default ResultMessage
