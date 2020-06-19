import React, { Component } from "react";

import Col from 'react-bootstrap/Col';



export default class SignUp extends Component {
    render() {
        return (
            <Col className="">
          
            <form className='sign-page'>
                <h1 className="sign-title">Sign Up</h1>

                <div className="form-group">
                   
                    <input type="text" className="form-cntrl" placeholder="First name" />
                </div>

                <div className="form-group">
                    
                    <input type="text" className="form-cntrl" placeholder="Last name" />
                </div>

                <div className="form-group">
                    
                    <input type="email" className="form-cntrl" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    
                    <input type="text" className="form-cntrl" placeholder="Enter username" />
                </div>

                <div className="form-group">
                   
                    <input type="password" className="form-cntrl" placeholder="Enter password" />
                </div>

                <button type="submit" className="sign-next" to="/userhome">Submit</button>
                <p className="forgot-password text-right">
                    Already registered? <a href="/sign-in">Click Here!</a>
                </p>
            </form>
            </Col>
        );
    }
}

