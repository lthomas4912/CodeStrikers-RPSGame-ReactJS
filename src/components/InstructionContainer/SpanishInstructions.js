import React, { Component } from "react";
import Row from 'react-bootstrap/Row';


import RegresarButton from '../ButtonsContainer/RegresarButton.js';


export default class SpanishInstruction extends Component{
    render(){
        return(
            <form className = "Spanish-page">
                <h1>Instrucciones</h1>
                <p>
                    Para jugar el juego de 
                    Piedra, Papel y Tijeras ay unos pasos simples que 
                    deves de practicar.
                </p>
                <p>
                    Las reglas de este juego son muy simples y facil
                    de implementar.
                </p>
                <p>
                    Ay tres ataques que puedes eliger: Piedra, Papel o
                    tijeras
                </p>

                <p>
                    La Piedra vence a las tijeras <br></br>
                    Las tijeras vencen al papel <br></br>
                    El papel vence la piedra  
                </p>
                
                <p>
                    Play = Jugar Play again = jugar de nuevo Donate = Donar <br></br>
                    Rematch = revancha <br></br>
                    New opponent = Nuevo oponente
                </p>
              
                <p>
                    Complete my avatar = completar mi avatar Login = Inicia Sesion
                </p>
               
                <Row className="user-direct regresar" ><RegresarButton /></Row>
            </form>
        )
    }
}
