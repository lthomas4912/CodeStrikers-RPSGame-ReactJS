import React, { Component } from "react";

import {BottomNavigation} from '@material-ui/core';
import {BottomNavigationAction} from '@material-ui/core';

// /* Bottom Nav Bar icons ----> 3 to 5 per bar */
// import DehazeIcon from '@material-ui/icons/Dehaze';    /* more */
import EqualizerIcon from '@material-ui/icons/Equalizer'; /* analytics */
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; /*profile*/
import HomeIcon from '@material-ui/icons/Home'; /* home */

export default class BottomNavBar extends Component{
     render() {
        return (
            <BottomNavigation className='bottom-nav'>
                   
                <BottomNavigationAction label="Home" icon= {<HomeIcon/>}/>
                <BottomNavigationAction label="GameStats" icon= {<EqualizerIcon/>} />
                <BottomNavigationAction label="Profile" icon= {<AccountCircleIcon/>} />
       
            </BottomNavigation>
        );
    }
}
