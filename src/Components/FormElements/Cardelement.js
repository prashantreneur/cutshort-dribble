import React from 'react';
import './Card.css';

const Cardelement = (props) => {
    return (
        <div className='card-element'>
            <h4 className='text'>{props.label}</h4>
            <p className='mt-2'>{props.description}</p>
        </div>
    );
};

export default Cardelement;
