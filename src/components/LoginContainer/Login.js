import React, { Component } from "react";
// import { Link } from 'react-router-dom';


class Login extends Component {
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <a href="/userHome" className="btn btn-primary btn-block">Submit</a>
                <p className="forgot-password text-right">
                    Haven't signed up? <a href="/sign-up">Sign-up</a>
                </p>
            </form>
        );
    }
}

export default Login;