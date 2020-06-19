import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


export default class SecondNavBar extends Component{
    render(){
        return(
            <div>
                <Container >
                    <Navbar fixed="top"  className="bot-navbar">
                        
                        <Nav className='navi'>
                            <Nav.Link href="/"><i class="fas fa-home "></i></Nav.Link>
                            <Nav.Link href="/userhome"><i class="fas fa-house-user "></i></Nav.Link>
                            <Nav.Link href="/englishinstructions"><i class="fas fa-question "></i></Nav.Link>
                        </Nav>
                    </Navbar>
                </Container>
            </div>
        )
    }
}