
import React from "react";
import './buttons.css';

import {withRouter} from "react-router-dom";

export default function Menu (){
    const Button = withRouter(({history}) => (
        <button className="menu-btn" type="button" 
        onClick={() => {history.push('/menu')}}><i class="fas fa-home"></i></button>
    ));
    return <Button/>
}


