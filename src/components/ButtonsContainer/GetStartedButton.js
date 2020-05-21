import React from "react";
import './buttons.css';

 import {withRouter} from "react-router-dom";

function GetStartedButton(){
    const Button = withRouter(({history}) => (
        <button className="start" type="button" 
        onClick={() => {history.push('/menu')}}>Get Started</button>
    ));
    return <Button/>
}

export default GetStartedButton;