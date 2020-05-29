import React from 'react';

import { withRouter } from 'react-router-dom';







function LoginButton() {
     const Button = withRouter(({history}) => (
        <button type="button" className=" login-but " 
        onClick={() => {history.push('/sign-in')}}> Login </button>

    ));
    return <Button />
}

export default LoginButton;