import React, { Component } from "react";
import Row from 'react-bootstrap/Row';

import PlayButton from '../ButtonsContainer/PlayButton.js';
import InstruccionesButton from '../ButtonsContainer/InstruccionesButton.js';





export default class EnglishInstruction extends Component{
    render(){
        return(
            <form className = "English-page">
                <h1 className = "title">Instructions</h1>
                <p className = "instruction">
                    To play Rock, Paper, 
                    Scissors, there are a few simple steps that you must 
                    practice. 
                </p>
                <p className = "instructionss">
                    The rules are very simple and probably you 
                    remember them from your childhood: <br></br>
                    If you choose Rock, you will win against Scissors but 
                    lose against Paper. <br></br>
                    If you choose Scissors, you will win against Paper but 
                    lose against Rock.  <br></br>
                    If you choose Paper, you will win against Rock but 
                    lose against Scissors. <br></br>
                    There can be 3 to 5 rounds. The game ends when 
                    somebody gets 3 wins. If you want to play again, just 
                    click “Play again” button after a game is finished. 

                </p>
                <Row> <InstruccionesButton /> </Row>
                <Row ><PlayButton /></Row>
                
            </form>
        )
    }
}

