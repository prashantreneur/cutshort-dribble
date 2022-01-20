import React, { Component } from 'react';
import './Userform.css';
import Welcome from './pages/Welcome';
import eden from '../../Assets/eden.png'
import Stepbar from '../Stepbar/Stepbar';
import Workspace from './pages/Workspace';
import Planning from './pages/Planning';
import { Success } from './pages/Success';

class Userform extends Component {

    state = {
        step: 1,
        fullname: '',
        displayName: '',
        workspaceName: '',
        workspaceUrl: '',
        workspaceUse: ''
    }

    //Proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    //Handle the Innput Change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };


    render() {
        const { step } = this.state;
        let page = null;
        switch (step) {
            case 1:
                page = <Welcome
                    nextStep={this.nextStep}
                />
                break;

            case 2:

                page = <Workspace
                    nextStep={this.nextStep}
                />
                break;

            case 3:

                page = <Planning
                    nextStep={this.nextStep}
                />
                break;

            case 4:

                page = <Success
                    nextStep={this.nextStep}
                />
                break;

            default: <Welcome />
        }

        return (
            <div className='card'>
                <div className='text-center'>
                    <img src={eden} alt="" />
                </div>
                <div className="text-center">
                    <Stepbar />
                </div>

                <div className='card-body'>

                    {page}

                </div>
            </div>
        )
    }
}

export default Userform;
