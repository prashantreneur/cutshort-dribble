import React from 'react';
import Button from '../../FormElements/Button';
import './pages.css';


const Planning = (props) => {
    return (
        <div className='content'>
            <div className="text-center mt-5 mb-5">
                <h1>Planning</h1>
            </div>
            <Button handleClick={props.nextStep}>Create WorkSpace</Button>
        </div>
    )
};

export default Planning;
