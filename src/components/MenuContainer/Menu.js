import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

import LoginButton from '../ButtonsContainer/LoginButton.js';
import SignUpButton from '../ButtonsContainer/SignUpButton.js';




export default class Menu extends Component {

    render() {
        return (
          
                <div className="menu-container" >
                    <Row> <h1 className="menu-title"> Home </h1> </Row>
                    <Row> <a href="/welcome" className=' main-but' >Code Differently Pipeline Games</a> </Row>
                    <Row className='login-butn'> <LoginButton  /> </Row>
                    <Row className='signup-butn'> <SignUpButton  /> </Row> 
                    <Row className= 'login-but '><a href="/userhome" className="use-home">User Home</a> </Row>   
                </div>
           
        );
    }
}