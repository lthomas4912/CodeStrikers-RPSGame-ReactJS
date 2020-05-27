import React from 'react';
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
                                
                            </ul>
                        </div>
                 </div>
             </Navbar>
    </Container>
    )
}
