import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

import Player from '../PlayerContainer/Player.js';
import Computer from '../ComputerContainer/Computer.js';


const selection = ["rock", "paper", "scissors"];
const compSelection = [ "comprock", "compscissors", "comppaper"];

export default class Game extends Component {

    state = {
        playerOne: selection[0],
        computer: compSelection[0],
        winner: ""
    };

    startGame = () => {
        let count = 0;
        let gameInterval = setInterval(() => {
            count++;
            this.setState({
            computer: compSelection[Math.floor(Math.random() * compSelection.length)],
            winner: ""
        });


        if (count > 5) {
            clearInterval(gameInterval);
            this.setState ({ winner: this.selectWinner()
            });
            }
        }, 100);
};

    selectWinner = () => {
    const { playerOne, computer } = this.state;

    if ( (playerOne ==="paper" &&  computer === "comppaper") ||
        (playerOne === "rock" && computer === "comprock") ||
        (playerOne === "scissors" && computer === "compscissors")){
        return "Issa tie...";
    } else if (
        (playerOne === "rock" && computer === "compscissors") ||
        (playerOne === "paper" && computer === "comprock") ||
        (playerOne === "scissors" && computer === "comppaper")
    ) {
        return "You are a Winna!";
    } else {
        return "Whomps, computer wins";
    }
    };

    selectSelection = selection => {
    this.setState({
        playerOne: selection,
        winner: ""
    })
    };


    render() {
            const { playerOne, computer, winner } = this.state;
        return (
            <div>
                <Row className='hands'>
                <Player selection={playerOne} />
                <Computer compSelection={computer} />
                </Row>
                <div>
                    <Row className="sel-btns ">
                    <button className="selectionButton btn"
                    onClick={() => this.selectSelection("rock")}
                    > rock 
                    </button>
                    <br></br>
                    <button className="selectionButton btn"
                    onClick={() => this.selectSelection("paper")}
                    > paper 
                    </button>
                    <button className="selectionButton btn"
                    onClick={() => this.selectSelection("scissors")}> scissors </button>
                    </Row>
                    
                       <Row className="who-win"> <div className="winner"><>{winner ? this.selectWinner() : null}</></div> </Row>
                       <Row > <button type="button" className="play-btn btn" onClick={this.startGame}> Play Hand </button>  </Row>
                   
                </div>
            </div>
          
        );
    }
}

