import React, { Component } from "react";
import './welcome.css';
import main from '../../assets/images/main-logo.png';


import LoginButton from '../ButtonContainer/LoginButton.js';
import SignUpButton from '../ButtonContainer/SignUpButton.js';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';


class WelcomeScreen extends Component {

    
    render() {
        return (
            <Container >
               <Row>
          
                <Box> <h3> Welcome </h3> </Box>
           
                </Row> 

            <Row><Image className="main" src={ main } alt="main logo"  /></Row>

            <Row className="wel-btn">
             <LoginButton />
                <SignUpButton />
                </Row>
            </Container>
        );
    }
}

export default WelcomeScreen;

const Box = props => <Container>{props.children} </Container>;
