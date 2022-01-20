import React from 'react';
import Button from '../../FormElements/Button';
import Cardelement from '../../FormElements/Cardelement';
import './pages.css';



const Planning = (props) => {
    return (
        <div className='content'>
            <div className="text-center mt-5 mb-5">
                <h2>How are you planning to use Eden</h2>
                <p>We'll streamline your steup experience accordingly.</p>
            </div>


            <div className="card-display text-center" >
                <Cardelement className='element' label='For Myself'
                    description='writer better. Think more clearly. stay organized.'
                />
                <Cardelement className='element' label='With my team'
                    description='Wikis, docs, tasks and projects, all in one place.'
                />
            </div >
            <Button handleClick={props.nextStep}>Create WorkSpace</Button>
        </div>
    )

};

export default Planning;
