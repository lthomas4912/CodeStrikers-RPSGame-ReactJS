import React from 'react';
<<<<<<< HEAD
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <Container>
            <Navbar className="navi" >
                <div className="container">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ">
=======
import {  Link } from "react-router-dom";



function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <h1>React JS</h1>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/"}>Welcome</Link>
                                 </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/userhome"}>User Home</Link>
                                </li>
<<<<<<< HEAD
                                
                            </ul>
                        </div>
                 </div>
             </Navbar>
    </Container>
    )
}
=======
                            
                            </ul>
                        </div>
                 </div>
             </nav>
    </div>
    );
}
export default Navbar;
>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8
