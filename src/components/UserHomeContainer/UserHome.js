import React, { Component } from "react";
import './userHome.css';


class UserHome extends Component {
    render() {
        return (
            <div>
                <h3 className="sm-title">React User Home Screen</h3>
                 <a href="/gamestats" className="btn btn-primary btn-block">To Game Stats</a>
                 
            </div>
        );
    }
}

export default UserHome;