import React from 'react';

import { withRouter } from 'react-router-dom';

import './buttons.css';



export default function UserHomeButton() {
     const Button = withRouter(({history}) => (
        <button
         type="play-button" 
         className="user-direct" 
         onClick={() => {history.push('/userhome')}}> 
         Let's Go! 
         </button>

    ));
    return <Button />
}

