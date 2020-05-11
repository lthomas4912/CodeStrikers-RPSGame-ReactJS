import React from 'react';
import Dropdown from 'react-bootstrap/DropDown';
import main from '../../assets/images/rps.png';
import './dropdown.css';
import Image from 'react-bootstrap/Image';


function DropDownMenu() {
    return (

        <Dropdown className="main-drop" alignRight="true">
            <Dropdown.Toggle variant="" id="dropdown-basic"> 
            <Image src={main} alt="main" height="100px" class='logo' roundedCircle />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/">Welcome</Dropdown.Item>
                <Dropdown.Item href="/sign-in">Sign-In</Dropdown.Item>
                <Dropdown.Item href="/sign-up">Sign-Up</Dropdown.Item>
            </Dropdown.Menu>

        </Dropdown>


    );
    
}

export default DropDownMenu;

