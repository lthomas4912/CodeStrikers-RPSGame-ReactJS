import React, { Component } from "react";


import ForgotPasswordButton from '../ButtonsContainer/ForgotPasswordButton.js';
import logo from '../../assets/images/cdlogo.png';
import Row from 'react-bootstrap/Row';


class ForgotPassword extends Component {
    render() {
        return (
            <div className="screen">
        <Row className="logo">  <img  src={logo} height="200px" alt="pipeline"/> </Row>
           <Row className='forgot-title'> <h6>Forgot Password</h6> </Row>
            
               
 <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>
            <form>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <ForgotPasswordButton/>

            </form>
            </div>
        );
    }
}
export default ForgotPassword;