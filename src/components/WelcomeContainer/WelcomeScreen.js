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
          
                <Box> <h2> Welcome </h2> </Box>
           
                </Row> 

            <Box><Image className="main" src={ main } alt="main logo"  /></Box>

            <Row className="wel-btn">
             <LoginButton />
                <SignUpButton />
                </Row>
            </Container>
        );
    }
}

export default WelcomeScreen;

const Box = props => <Container className="box">{props.children} </Container>;
