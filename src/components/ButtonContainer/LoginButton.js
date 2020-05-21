import React from 'react';

import { withRouter } from 'react-router-dom';



import './button.css';


function LoginButton() {
     const Button = withRouter(({history}) => (
        <button type="button" className="btn btn-primary " 
        onClick={() => {history.push('/sign-in')}}> Login </button>

    ));
    return <Button />
}

export default LoginButton;