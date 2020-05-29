
import React from "react";


import {withRouter} from "react-router-dom";

function ForgotPasswordButton(){
    const Button = withRouter(({history}) => (
        <button className="Pw" type="button" 
        onClick={() => {history.push('/sign-in')}}>Send Email</button>
    ));
    return <Button/>
}

export default ForgotPasswordButton;
