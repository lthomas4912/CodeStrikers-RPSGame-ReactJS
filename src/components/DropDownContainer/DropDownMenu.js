import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import Image from 'react-bootstrap/Image';
import main from '../../assets/images/main.png';


import './dropdown.css';

function DropDownMenu() {

    return (
        <Dropdown className="main-drop" >
            <Dropdown.Toggle  id="dropdown-basic" ><Image src={main} height="50px" className="main1" alt="main logo" rounded />  </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/">Welcome</Dropdown.Item>
                <Dropdown.Item href="/userhome">UserHome</Dropdown.Item>
                <Dropdown.Item href="/game">Play Game</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    );
    
}

export default DropDownMenu;