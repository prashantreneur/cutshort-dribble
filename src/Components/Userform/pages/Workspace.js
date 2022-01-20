import React from 'react';
import Input from '../../FormElements/Input';
import Button from '../../FormElements/Button';
import './pages.css';

const Workspace = (props) => {
    return (
        <div className='content'>
            <div className="text-center mt-5 mb-5">
                <h1>Workspace</h1>
            </div>
            <Input label='Workspace Name' />
            <Input label='Workspace URL' />
            <Button handleClick={props.nextStep}>Create WorkSpace</Button>
        </div>
    )
};

export default Workspace;
