import React from "react";


 import {withRouter} from "react-router-dom";

export default function GetStartedButton(){
    const Button = withRouter(({history}) => (
        <button className="start " type="button" 
        onClick={() => {history.push('/menu')}}>Get Started</button>
    ));
    return <Button/>
}

