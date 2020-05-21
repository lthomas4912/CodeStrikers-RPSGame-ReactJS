import React, { Component } from "react";

<<<<<<< HEAD
import Col from 'react-bootstrap/Col';

export default class SignUp extends Component {
=======

class SignUp extends Component {
>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8
    render() {
        return (
            <Col className="">
            <form className='sign-page'>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block signup">Submit</button>
                <p className="forgot-password text-right">
<<<<<<< HEAD
                    Already registered? <a href="/sign-in">Click Here!</a>
=======
                    Already registered <a href="/sign-in">sign in?</a>
>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8
                </p>
            </form>
            </Col>
        );
    }
}

