import React from 'react';
import './buttons.css';
import { withRouter } from 'react-router-dom';

 function InstruccionesButton(){
    const Button = withRouter(({history}) => (
        <button
        type = "button"
        onClick = {() => {history.push('/spanishinstructions')}}
        className="btn btn-primary btn-block">
        Instrucciones
        </button>
    ));

    return <Button/>
}
export default InstruccionesButton;