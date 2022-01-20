import React from 'react';
import './Stepbar.css'

const Stepbar = () => {
    return (
        <div className="stepper-wrapper">
            <div className="stepper-item completed">
                <div className="step-counter">1</div>

            </div>
            <div className="stepper-item completed">
                <div className="step-counter">2</div>

            </div>
            <div className="stepper-item active">
                <div className="step-counter">3</div>

            </div>
            <div className="stepper-item">
                <div className="step-counter">4</div>

            </div>
        </div>
    )
};

export default Stepbar;
