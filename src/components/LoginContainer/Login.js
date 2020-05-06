import React, { Component } from "react";
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({ [ e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { userName, password } = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" value={userName} placeholder="Enter username" onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" value={password} placeholder="Enter password" onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    
                </p>
            </form>
        );
    }
}

export default Login;