import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import LoginButton from '../ButtonsContainer/LoginButton.js';
import SignUpButton from '../ButtonsContainer/SignUpButton.js';




export default class Menu extends Component {

    render() {
        return (
            <Container className="menu-container" >
            <Row> <h3> Menu </h3> </Row>
            <Row> <a href="/" className=' main-but' >Code Differently Pipeline Games</a> </Row>
           <Row className='login-butn'> <LoginButton  /> </Row>
           <Row className='signup-butn'> <SignUpButton  /> </Row>
          
                
            </Container>
               
        );
    }
}