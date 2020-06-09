import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';




import PlayButton from '../ButtonsContainer/PlayButton.js';
import EnglishInstructionsButton from '../ButtonsContainer/EnglishInstructionsButton.js';
import PaypalButton from '../ButtonsContainer/PaypalButton.js';



import plain from '../../assets/images/default-profile-image.png';
import "bootstrap/dist/css/bootstrap.min.css"; 

 export default class UserHome extends Component {
    render() {
        return (
          <div >
              {/* <Row> <a href="/menu" className="menu-home-butn">Home</a> </Row> */}
        
            <div className="user-home">
                 
                    <Image src={plain} height="150px" alt="vector" className='vector' />
                <br></br>   
                   <Row> <button className ="userhome-but pro" to="/my-profile">My profile</button>
               
                    <button className ="userhome-but request" to="/friend-requests">Friend Requests</button> </Row>
             
                   <Row> <EnglishInstructionsButton className="userhome-but English"/>              
                    <PlayButton /> </Row>
                    <p>
                       Donate $1 or more to fund our Youth Technology
                       Learning Program based in Wilmington, DE.</p> 
                    <div> <PaypalButton /> </div>
            </div>
            {/* <Row className="bot-navbar"><SecondBottomNavBar /></Row> */}
        </div>

        );
    }
}

