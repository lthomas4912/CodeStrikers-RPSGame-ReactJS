import React, { Component } from "react";
import './welcome.css';
import main from '../../assets/images/main-logo.png';


import LoginButton from '../ButtonContainer/LoginButton.js';
import SignUpButton from '../ButtonContainer/SignUpButton.js';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';


<<<<<<< HEAD
import GetStartedButton from '../ButtonsContainer/GetStartedButton.js';


import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import rps from '../../assets/images/rps-logo.png';
import './welcome.css';

export default class WelcomeScreen extends Component {
    render() {
        return (
            <Container>
                <Row className="main-pic"><Image src={rps} height="150px" className="main" alt="main logo" /> </Row>
                 <Row className='wel'> <h4> With</h4> </Row> {' '}
                 <Row className='wel-title'><h3> Code Differently Pipeline Games  </h3> </Row>
                 <Row className='start '> <GetStartedButton /> </Row>
=======
class WelcomeScreen extends Component {

    
    render() {
        return (
            <Container >
               <Row>
          
                <Box> <h2> Welcome </h2> </Box>
           
                </Row> 

            <Box><Image className="main" src={ main } alt="main logo"  /></Box>

            <Row className="wel-btn">
             <LoginButton />
                <SignUpButton />
                </Row>
>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8
            </Container>
        );
    }
}

<<<<<<< HEAD
=======
export default WelcomeScreen;

const Box = props => <Container className="box">{props.children} </Container>;
>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8
