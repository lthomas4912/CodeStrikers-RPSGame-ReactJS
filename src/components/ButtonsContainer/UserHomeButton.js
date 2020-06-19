import React from 'react';

import { withRouter } from 'react-router-dom';





export default function UserHomeButton() {
     const Button = withRouter(({history}) => (
        <button
         type="button" 
         className="next"
         onClick={() => {history.push('/userhome')}}> 
         Let's Go! 
         </button>

    ));
    return <Button />
}

