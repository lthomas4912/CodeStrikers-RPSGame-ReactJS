import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


export default class SecondNavBar extends Component{
    render(){
        return(
            <div>
                <Container className='new-nav'>
                    <Navbar fixed="bottom"  className="bot-navbar">
                        <Navbar.Brand href="/welcome" >
                         <p className='nav-code'>Code</p>
                         <p className='nav-diff'>Differently</p>
                         </Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/menu"><i class="fas fa-home"></i></Nav.Link>
                            <Nav.Link href="/menu"><i class="fas fa-home"></i></Nav.Link>
                            <Nav.Link href="/menu"><i class="fas fa-home"></i></Nav.Link>
                        </Nav>
                    </Navbar>
                </Container>
            </div>
        )
    }
}