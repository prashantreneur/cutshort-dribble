import React from 'react';
import './Stepbar.css'

const Stepbar = ({ step }) => {


    let status = {};
    for (let i = 0; i < 4; i++) {
        if (step === i) {
            status[i] = 'completed'
        }
        if (i < step) {
            status[i] = 'completed'
        }
        else {
            status[i] = 'active'
        }
    }

    return (
        <div className="stepper-wrapper">
            <div className={`stepper-item ${status[0]}`}>
                <div className="step-counter">1</div>

            </div>
            <div className={`stepper-item ${status[1]}`}>
                <div className="step-counter">2</div>

            </div>
            <div className={`stepper-item ${status[2]}`}>
                <div className="step-counter">3</div>

            </div>
            <div className={`stepper-item ${status[3]}`}>
                <div className="step-counter">4</div>

            </div>
        </div>
    )
};

export default Stepbar;
