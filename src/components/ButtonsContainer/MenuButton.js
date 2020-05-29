
import React from "react";
import {withRouter} from "react-router-dom";




export default function MenuButton (){
    const Button = withRouter(({history}) => (
        <button type="button" 
        onClick={() => {history.push('/menu')}}> <i class="fas fa-home"></i> </button>

    ));
    return <Button />
}


