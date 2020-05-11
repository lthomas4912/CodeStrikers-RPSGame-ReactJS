import React from 'react';

import { withRouter } from 'react-router-dom';

import './button.css';


function SignUpButton() {
     const Button = withRouter(({history}) => (
        <button type="button" className="btn btn-primary signup"
        onClick={() => {history.push('/sign-up')}}> Sign-up </button>

    ));
    return <Button />
}

export default SignUpButton;
