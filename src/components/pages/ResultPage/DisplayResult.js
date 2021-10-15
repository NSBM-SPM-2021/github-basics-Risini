import React from 'react';
import ResultMessage from './ResultMessage';
import './ResultMessage.css';

function DisplayResult() {
    return (
        <div className='result-body'>
            <div className='message-body'>
                <div>
                    <ResultMessage/>
                    <br/>
                    {/* <img className='form-img' src='images/svg-4.svg' alt='ResultMessage' /> */}
                </div>
            </div>
        </div>
    )
}

export default DisplayResult;
