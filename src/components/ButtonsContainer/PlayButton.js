import React from 'react';

import { withRouter } from 'react-router-dom';

 export default function PlayButton(){
    const Button = withRouter(({history}) => (
        <button
        type = "button"
        onClick = {() => {history.push('/game')}}
        className="  play-now">
        Play Now!
        </button>
    ));

    return <Button />
}

