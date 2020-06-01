import React from 'react';

import { withRouter } from 'react-router-dom';

export default function EnglishInstructionsButton(){
    const Button = withRouter(({history}) => (
        <button
        
        onClick = {() => {history.push('/englishinstructions')}}
        className=" English-instruct user-direct ">
        Instructions
        </button>
    ));

    return <Button/>
}
