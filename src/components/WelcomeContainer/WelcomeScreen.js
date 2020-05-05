import React, { Component } from "react";

class WelcomeScreen extends Component {
    render() {
        return (
            <div>
                <h3>React Welcome Component</h3>
                <div>
                <button className="wel-button" href="#signup">Sign Up</button>
                <button className="wel-button" href="#login">Login </button>
                </div>
            </div>
        );
    }
}

export default WelcomeScreen;