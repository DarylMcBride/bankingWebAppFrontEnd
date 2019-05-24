import React, { Component } from 'react';
import {backend_IP} from './constants';
export default class ExistingUserLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usernameText: "",
            passwordText: ""
        }
    }

    usernameTextChange = (e) => {
        this.setState({
            usernameText: e.target.value
        });
    }

    passwordTextChange = (e) => {
        this.setState({
            passwordText: e.target.value
        });
    }

    submitUsernameAndPassword = () => {
        this.loginAttempt(this.state.usernameText, this.state.passwordText);
    }

    loginAttempt = (user, pass) => {
        let postRequest = new XMLHttpRequest();
        postRequest.open('GET', `http://${backend_IP}/api/v1/users/` + user + '/' + pass);
        postRequest.setRequestHeader("Content-Type", "application/json");
        let obj = { username: user, password: pass };
        let body = JSON.stringify(obj);
        postRequest.responseType = "json";
        postRequest.onload = () => {
            if (postRequest.readyState === 4 && postRequest.status === 200 && postRequest.response !== -1) {
                this.props.login(postRequest.response);
            } else {
                var element = document.getElementById("username-error");
                element.classList.add("display")
                console.log("login error.");
            }
        }
        postRequest.send(body);
    }

    render() {

        return (
            <div>
                <form className="container2">
                    <h2>Login</h2>
                    <strong id="username-error" className="login-error">Username or password incorrect</strong>
                    <input className="username-input" type="text" placeholder="Enter Username" name="username" onChange={this.usernameTextChange} required />
                    <input type="password" placeholder="Enter Password" name="password" onChange={this.passwordTextChange} required />
                    <input type="button" className="login-button" value="Login" onClick={this.submitUsernameAndPassword} />
                </form>
            </div>
        );
    }
}