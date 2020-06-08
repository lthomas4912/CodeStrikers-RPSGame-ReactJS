import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

import Player from '../PlayerContainer/Player.js';
import Computer from '../ComputerContainer/Computer.js';
import BottomNavBar from '../NavbarContainer/BottomNavBar.js';



import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';
import questionmark from '../../assets/images/question-mark.png';




const selection = ["rock", "paper", "scissors"];
const compSelection = [ "comprock", "compscissors", "comppaper"];


export default class Game extends Component {
    




    state = {
        playerOne: "",
        computerPlayer: "" ,
        winner: "",
        playerWins: 0,
        computerWins: 0
    };

    


    score( playerPick, computerPick){

        if ( (playerPick ==="paper" &&  computerPick === "comppaper") ||
            (playerPick === "rock" && computerPick === "comprock") ||
            (playerPick === "scissors" && computerPick === "compscissors")){
                    return 0;
        } else if (
            (playerPick === "rock" && computerPick === "compscissors") ||
            (playerPick === "paper" && computerPick === "comprock") ||
            (playerPick === "scissors" && computerPick === "comppaper")) {
                return 1;
        } else {
                return -1;
        }
    };

    selectWinner = () => {
    const { playerOne, computerPlayer, winner, playerWins, computerWins } = this.state;


     const compSelection = [ "comprock", "compscissors", "comppaper"];
     const computer =  compSelection[Math.floor(Math.random() * compSelection.length)];
     

     const result = this.score(this.state.playerOne, computer);

            if ( (result === -1) && ((playerOne ==="paper" &&  computerPlayer === "comppaper") ||
                (playerOne === "rock" && computerPlayer === "comprock") ||
                (playerOne === "scissors" && computerPlayer === "compscissors"))){
                    this.setState({
                        computerPick: computer,
                        winner: "Issa tie..."
                    })
                
            } else if ( (result === 1) && 
                ((playerOne === "rock" && computerPlayer === "compscissors") ||
                (playerOne === "paper" && computerPlayer === "comprock") ||
                (playerOne === "scissors" && computerPlayer === "comppaper"))
            ) {
                    this.setState({
                    playerOne: this.playerOne,
                    playerWins: this.state.playerWins + 1,
                    winner: "You are a WINNA!"
                    })
            } else {
                    this.setState({
                    computerPlayer: computer,
                    computerWins: this.computerWins + 1,
                    winner: " Whomps. You Lose" 
                    })
            }

            let count = 0;
            let gameInterval = setInterval(() => {
            count++;
            this.setState({
            
            winner: ""
        });


        if (count > 5) {
            clearInterval(gameInterval);
            this.setState ({ winner: this.selectWinner()
            });
            }
             }, 100);
    };



   


    paperButton = () => {
        this.setState({
            playerOne: "paper"
        })
    }

    rockButton = () => {
        this.setState({
            playerOne: "rock"
        })
    }

    scissorsButton = () => {
        this.setState({
            playerOne: "scissors"
        })
    }



    render() {

    
        const { playerOne, computerPlayer, playerWins, computerWins} = this.state;
        const theEnd = this.state.winner;

        return (
            

             <div>
               
               {/* <Row> <a href="/menu" className="menu-game-butn">Home</a> </Row> */}
                <div class="score-board">
                    <div id = "user-label" class = "badge" ><i class="fas fa-user"></i></div>
                    <div id = "computer-label" class = "badge" > <i class="fas fa-robot"></i> </div>
                    <span id = "user-score"> {playerWins} :<span id = "computer-score" > {computerWins}</span></span>
                </div> 
            
                
                <Row className='hands'>
                    <Player selection={playerOne} />
                    <Computer compSelection={computerPlayer} />
                </Row>
                
                 <Row className="who-win"> <div className="winner"><>{theEnd ? this.result : "May The Best Win!!!"}</></div> </Row>
                <Row className="choices ">
                    <button className="selectionButton" type="button"
                    value="rock"
                        onClick={this.rockButton}>  
                        <img  src={rock}height="75px" center alt="pipeline"/>
                    </button>
                    
                    <button className="selectionButton " type="button"
                    value="paper"
                    onClick={this.paperButton}
                    > <img  src={paper} height="80px" center alt="pipeline"/>
                    </button>
                    

                    <button className="selectionButton " 
                    type="button"
                    value="scissors"
                    onClick={this.scissorsButton}>
                     <img  src={scissors} height="80px" center alt="pipeline"/>
                     </button>
                </Row>
            
                <Row > <button type="button" className="play-btn " onClick={this.selectWinner}> Play Hand </button>  </Row>

               
            </div>
            
          
        );
    }
}
