import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';


import GetStartedButton from '../ButtonsContainer/GetStartedButton.js';
import PaypalButton from '../ButtonsContainer/PaypalButton.js';
import UserHomeButton from '../ButtonsContainer/UserHomeButton.js';



import rps from '../../assets/images/rps-logo.png';


export default class WelcomeScreen extends Component {
    render() {
        return (
            <div>
                 <Image src={rps} className="main"  alt="main logo" /> 
                 <Row><h4 className='wel-title'>Log In </h4></Row>
                 <form >
            <div className="form-group">
                
                    <input type="text" className="form-cntrl" placeholder="Enter username" />
                </div>

                <div className="form-group">
                  
                    <input type="password" className="form-cntrl" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <UserHomeButton className="login-home-butn" />
                <p className="pw">Forgot 
                        <Link className="link"to="/forgotpw"> Password</Link>
                        ?
                    </p>
            </form>

                 <Row className="copyright"><i class="far fa-copyright"> <span className="copyright-code">Code Differently</span></i></Row>
            </div>
        );
    }
}

