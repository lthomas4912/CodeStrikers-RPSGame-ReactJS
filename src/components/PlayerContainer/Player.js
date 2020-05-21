import React from 'react';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';
import rock from '../../assets/images/rock.png';

import './player.css';



        const Player = ({ selection }) => {
            return (
                <div className="player">
                    <img className="player-image"
                    src={
                    selection === 'rock'? rock : selection === "scissors" ? scissors : paper
                    } 
                    alt="Rock Paper Scissors"
                    />
                </div>
             );
         }
    export default Player;

