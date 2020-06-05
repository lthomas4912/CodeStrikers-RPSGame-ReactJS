import React, { Component } from "react";




import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';


import GetStartedButton from '../ButtonsContainer/GetStartedButton.js';
import PaypalButton from '../ButtonsContainer/PaypalButton.js';



import rps from '../../assets/images/rps-logo.png';


export default class WelcomeScreen extends Component {
    render() {
        return (
            <div>
                 <Row className="main-pic"><Image src={rps} height="150px" className="main" alt="main logo" /> </Row>
                 <Row className='start strt-butn'> <GetStartedButton /> </Row>
                 <Row className="copyright"><i class="far fa-copyright"> <span className="copyright-code">Code Differently</span></i></Row>
            </div>
        );
    }
}

