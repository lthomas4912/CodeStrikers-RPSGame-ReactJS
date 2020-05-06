import React, { Component } from "react";
import './welcome.css';
 



class WelcomeScreen extends Component {

    
    render() {
        return (
            <div>
                <h3 className="wel-title">React Welcome Component</h3>
                <button href="/login" value="log" className="wel-button"> Log In</button>
                <button type="submit" value="Submit" className="wel-button"> Sign Up</button>
                
            </div>
        );
    }
}

export default WelcomeScreen;           

