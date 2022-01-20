import React from 'react';
import Button from '../../FormElements/Button';



export const Success = (props) => {
    return (
        <div className='content'>
            <div className="text-center mt-5 mb-5">
                <h2>Congratulations, Eren!</h2>
                <p>You have completed onboarding, you can start using eden</p>
            </div>
            <Button handleClick={props.nextStep}>Launch Eden</Button>
        </div>
    )
}
