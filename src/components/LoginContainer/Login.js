import React, { Component } from "react";
<<<<<<< HEAD
import './Login.css';
// import LoginButton from '../ButtonContainer/LoginButton'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/cdlogo.png';
import Row from 'react-bootstrap/Row';
import UserHomeButton from '../ButtonsContainer/UserHomeButton.js';
=======
import './login.css';
>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8

export default class Login extends Component {
    render() {
        return (
            <form>
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

<<<<<<< HEAD
                <UserHomeButton />
                <p className="pw">Forgot 
                        <Link className="link"to="/forgotpw">Password</Link>
                        ?
                    </p>
=======
                <a href="/userhome" className="btn btn-primary btn-block">Submit</a>
                <p className="forgot-password text-right">
                    Forgot to Sign Up? <a href="/sign-up">Click Here</a>
                </p>
>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8
            </form>
        );
    }
}

