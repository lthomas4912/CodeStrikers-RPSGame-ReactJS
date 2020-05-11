import React from 'react';
import {  Link } from "react-router-dom";



function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <h1>React JS</h1>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
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
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/gamestats"}>Game Stats</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/donate"}>Donate</Link>
                                </li>
                            </ul>
                        </div>
                 </div>
             </nav>
    </div>
    );
}
export default Navbar;