import React from 'react';
import './buttons.css';
import { withRouter } from 'react-router-dom';

 export default function PlayButton(){
    const Button = withRouter(({history}) => (
        <button
        type = "button"
        onClick = {() => {history.push('/game')}}
        className="btn btn-primary btn-block">
        Play Now!
        </button>
    ));

    return <Button />
}

