import React from 'react';

import { withRouter } from 'react-router-dom';

import './buttons.css';



export default function SignUpButton() {
     const Button = withRouter(({history}) => (
        <button type="button" className=" signup-but"
        onClick={() => {history.push('/sign-up')}}> Sign-up </button>

    ));
    return <Button />
}

