import React from 'react';
import Input from '../../FormElements/Input';
import Button from '../../FormElements/Button';
import './pages.css';

const Welcome = (props) => {
    return (
        <div className='content'>
            <div className="text-center mt-5 mb-5">
                <h1 >Welcome! First thing first...</h1>
                <p>You can always change them later</p>
            </div>
            <Input label='Full Name' />
            <Input label='Last Name' />
            <Button handleClick={props.nextStep}>Create Workspace</Button>
        </div>
    )

};

export default Welcome;
