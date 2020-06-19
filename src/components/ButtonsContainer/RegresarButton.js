import React from 'react';

import { withRouter } from 'react-router-dom';

export default function RegresarButton(){
    const Button = withRouter(({history}) => (
        <button
        type = "button"
        onClick = {() => {history.push('/game')}}
        className="instruct-play">
        Regresar al juego
        </button>
    ));

    return <Button/>
}

 