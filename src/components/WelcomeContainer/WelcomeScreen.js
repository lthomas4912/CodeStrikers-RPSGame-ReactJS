import React, { Component } from "react";



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';


import GetStartedButton from '../ButtonsContainer/GetStartedButton.js';


import rps from '../../assets/images/rps-logo.png';


export default class WelcomeScreen extends Component {
    render() {
        return (
            <Container>
                <Row className="main-pic"><Image src={rps} height="150px" className="main" alt="main logo" /> </Row>
                 <Row className='wel'> <h4> With</h4> </Row> {' '}
                 <Row className='wel-title'><h3> Code Differently Pipeline Games  </h3> </Row>
                 <Row className='start '> <GetStartedButton /> </Row>
            </Container>
        );
    }
}

