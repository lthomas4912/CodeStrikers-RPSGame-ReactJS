import React from 'react';

import { withRouter } from 'react-router-dom';

export default function EnglishInstructionsButton(){
    const Button = withRouter(({history}) => (
        <button
        
        onClick = {() => {history.push('/englishinstructions')}}
        className="userhome-but">
        Instruction
        </button>
    ));

    return <Button/>
}
