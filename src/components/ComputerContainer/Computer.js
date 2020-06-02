import React from 'react';
import comppaper from '../../assets/images/comppaper.png';
import compscissors from '../../assets/images/compscissors.png';
import comprock from '../../assets/images/comprock.png';
import questionmark from '../../assets/images/question-mark.png';




        const Computer = ({ compSelection }) => {

            return(
                <div className="player">
                    <img
                        className="computer-hand"
                        src={
                            compSelection === "comprock" ? comprock : compSelection === "compscissors" ? compscissors : 
                            compSelection === "comppaper" ? comppaper : questionmark
                        }
                        alt="Rock paper scissors"
                        />
                </div>
            );

        }
    
    export default Computer;
