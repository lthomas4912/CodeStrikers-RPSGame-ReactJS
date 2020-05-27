import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

import UserHomeButton from '../ButtonsContainer/UserHomeButton.js';


import './login.css';
import logo from '../../assets/images/cdlogo.png';

export default class Login extends Component {
    render() {
        return (
            <>
            
          
            <form className="page-login">
               <Row className="logo">  <img  src={logo} height="200px" alt="pipeline"/> </Row>
              

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <UserHomeButton />
                <p className="pw">Forgot 
                        <Link className="link"to="/forgotpw"> Password</Link>
                        ?
                    </p>
            </form>

              </>
        );
    }
}

