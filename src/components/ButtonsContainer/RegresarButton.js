import React from 'react';
import './buttons.css';
import { withRouter } from 'react-router-dom';

export default function RegresarButton(){
    const Button = withRouter(({history}) => (
        <button
        type = "button"
        onClick = {() => {history.push('/game')}}
        className="btn user-direct ">
        Regresar al juego
        </button>
    ));

    return <Button/>
}

 