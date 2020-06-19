import React from 'react';

import { withRouter } from 'react-router-dom';

 function InstruccionesButton(){
    const Button = withRouter(({history}) => (
        <button
        type = "button"
        onClick = {() => {history.push('/spanishinstructions')}}
        className="Spanish-instruct">
        Instrucciones
        </button>
    ));

    return <Button/>
}
export default InstruccionesButton;