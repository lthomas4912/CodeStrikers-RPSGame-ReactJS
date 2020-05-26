import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export default class Menu extends Component {

    render() {
        return (
            <Container className="menu-container" >
            <Row> <h3> Menu </h3> </Row>
           <Row> <a href="/" className="btn  btn-block user-direct">Code Differently Pipeline Games</a> </Row>
           <Row className='menu'> <a href="/sign-in" className="btn  btn-block user-direct">Login</a> </Row>
           <Row className='menu'> <a href="/sign-up" className="btn  btn-block user-direct">Sign-Up</a> </Row>
                
            </Container>
               
        );
    }
}