import React from 'react';
import Input from '../../FormElements/Input';
import Button from '../../FormElements/Button';
import './pages.css';

const Workspace = (props) => {
    return (
        <div className='content'>
            <div className="text-center mt-5 mb-5">
                <h2>Let's set up a home for all your work</h2>
                <p>You can always create another workspace later</p>
            </div>
            <Input label='Workspace Name' onChange={props.handleChange} name='workspaceName' value={props.values.workspaceName} />
            <Input label='Workspace URL' onChange={props.handleChange} name='workspaceUrl' value={props.values.workspaceUrl} />
            <Button handleClick={props.nextStep}>Create WorkSpace</Button>
        </div>
    )
};

export default Workspace;
