import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

import Player from '../PlayerContainer/Player.js';
import Computer from '../ComputerContainer/Computer.js';
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';
import questionMark from '../../assets/images/question-mark.png';


const compSelection = [ "comprock", "compscissors", "comppaper"];



export default class Game extends Component {
    

    state = {
        playerOne: "" ,
        computer: "",
        winner: "",
        playerWin: 0,
        computerWin: 0,
        playerCounter: 1,
        computerCounter: 1
       
    };

    startGame = () => {



        let count = 0;
        let gameInterval = setInterval(() => {
            count++;
            this.setState({
            computer: compSelection[Math.floor(Math.random() * 3)],
            winner: "",
        });


        if (count > 5) {
            clearInterval(gameInterval);
            this.setState ({
                 winner: this.selectWinner()

            });
            if(this.state.winner === "You are a Winna!"){
                console.log("Here");
                this.Increment();
            }
            else if (this.state.winner === "Whomps, computer wins"){
                console.log("There");
                this.IncrementComp();
            }
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

    Increment = () =>{
        let playerCounter = this.state.playerCounter;
        this.setState({
            playerWin: playerCounter

        })
        this.state.playerCounter = playerCounter + 1;
    }

    IncrementComp = () =>{
        let computerCounter = this.state.computerCounter;
        this.setState({
            computerWin: computerCounter
        })
        this.state.computerCounter = computerCounter + 1;
    }

    selectSelection = selection => {
    this.setState({
        playerOne: selection,
        winner: ""
    })
    };

    render() {
            const { playerOne, computer, winner} = this.state;

            const playerHand = this.state.playerOne;
            const computerHand = this.state.computer;
           // scoreboard codelines 79-83 
        return (
            
             <div className='game-page'>
               
                
                <div>
                    
            <div class="score-board">
        <div id = "user-label" class = "badge" ><i class="fas fa-user"></i></div>
        <div id = "computer-label" class = "badge" > <i class="fas fa-robot"></i> </div>
    <span id = "user-score">{this.state.playerWin} :<span id = "computer-score" > {this.state.computerWin}</span>
        </span> 
       </div> 
       </div>
       <br></br>
                <Row className='hands'>
                <Player selection={playerHand} />
                <Computer compSelection={computerHand} />
                </Row>
                <br></br>
                    <Row className="choices ">
                    <roundbutton className="selectionButton"
                    onClick={() => this.selectSelection("rock")}
                    >  <img  src={rock}height="90px" center alt="pipeline"/>
                    </roundbutton>
                    <br></br>
                    <br></br> 
                    <br></br> 
                    <roundbutton className="selectionButton "
                    onClick={() => this.selectSelection("paper")}
                    > <img  src={paper} height="80px" center alt="pipeline"/>
                    </roundbutton>
                    <br></br>

                    <roundbutton className="selectionButton "
                    onClick={() => this.selectSelection("scissors")}>
                     <img  src={scissors} height="80px" center alt="pipeline"/>
                     </roundbutton>
                    </Row>
                    <br></br>
                    
                       <Row className="who-win"> <div className="winner"><>{winner ? this.selectWinner() : "May the best Win"}</></div> </Row>
                       <Row > <button type="button" className="play-btn " onClick={this.startGame}> Play Hand </button>  </Row>
                </div>

          
        );
    }
}
