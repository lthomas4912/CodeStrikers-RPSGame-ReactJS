import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';



import PlayButton from '../ButtonsContainer/PlayButton.js';
import EnglishInstructionsButton from '../ButtonsContainer/EnglishInstructionsButton.js';


import plain from '../../assets/images/default-profile-image.png';
import "bootstrap/dist/css/bootstrap.min.css"; 

 export default class UserHome extends Component {
    render() {
        return (
          <div >
              <Row> <a href="/menu" className="menu-home-butn">Home</a> </Row>
        
            <div className="user-home">
                 
                    <Image src={plain} height="120px" alt="vector" className='vector' />
                <br></br>   
                    <button className ="user-direct" to="/my-profile">My profile</button>
                <br></br>
                    <button className ="user-direct" to="/game-stats">Game Stats</button>
               <br></br>     
                    <button className ="user-direct" to="/friend-requests">Friend Requests</button>
                <br></br>    
                    <EnglishInstructionsButton/>              
                    <div className="user-direct user-play " ><PlayButton /></div>
                    <p>
                       Donate $1 or more to fund our Youth Technology
                       Learning Program based in Wilmington, DE.</p> 

                    <button id="donate-button" to="/donate">Donate</button>
            </div>

        </div>

        );
    }
}

