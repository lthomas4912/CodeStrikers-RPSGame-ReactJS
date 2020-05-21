import React, { Component } from "react";
<<<<<<< HEAD
import Image from 'react-bootstrap/Image';


import MenuButton from '../ButtonsContainer/MenuButton.js';
import PlayButton from '../ButtonsContainer/PlayButton.js';


import plain from '../../assets/images/default-profile-image.png';
import './UserHome.css'; 
import "bootstrap/dist/css/bootstrap.min.css"; 

 export default class UserHome extends Component {
    render() {
        return (
          
            <div className="user-home">
                  <MenuButton />
                    <Image src={plain} height="120px" alt="vector" />
                <br></br>   
                    <button className ="user-direct" to="/my-profile">My profile</button>
                <br></br>
                    <button className ="user-direct" to="/game-stats">Game Stats</button>
               <br></br>     
                    <button className ="user-direct" to="/friend-requests">Friend Requests</button>
                <br></br>    
                    <a href="/EnglishInstructions" className="btn btn-primary btn-block user-direct">Instructions</a>                
                    <div className="play-butn"><PlayButton /></div>
                    <p>
                       Donate $1 or more to fund our Youth Technology
                       Learning Program based in Wilmington, DE.</p> 

                    <button id="donate-button" to="/donate">Donate</button>
            </div>

=======
import './userHome.css';


class UserHome extends Component {
    render() {
        return (
            <div>
                <h3 className="sm-title">React User Home Screen</h3>
                 
                 
            </div>
>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8
        );
    }
}

<<<<<<< HEAD
=======
export default UserHome;
>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8
