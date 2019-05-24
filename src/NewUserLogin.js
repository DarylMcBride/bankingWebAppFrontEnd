import React, { Component } from 'react';
import {backend_IP} from './constants';
export default class NewUserLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usernameText: "",
            passwordText: "",
            confirmPasswordText: ""
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

    confirmPasswordTextChange = (e) => {
        this.setState({
            confirmPasswordText: e.target.value
        });
    }

    submitUsernameAndPassword = () => {
        this.hideMessages();
        if (this.state.confirmPasswordText === this.state.passwordText) {
            this.checkUsername(this.state.usernameText);
        } else {
            var element = document.getElementById("password-error");
            element.classList.add("display")
        }
    }

    checkUsername = (username) => {
        let getRequest = new XMLHttpRequest();
        getRequest.open('GET', `http://${backend_IP}/api/v1/users/username/` + username);
        getRequest.responseType = "json";
        getRequest.onload = () => {
            if (getRequest.response > 0) {
                var element = document.getElementById("username-error");
                element.classList.add("display")
            } else {
                this.addNewUser(this.state.usernameText, this.state.passwordText);
            }
        }
        getRequest.send();
    }

    addNewUser = (username, password) => {
        let postRequest = new XMLHttpRequest();
        postRequest.open('POST', `http://${backend_IP}/api/v1/users/`);
        postRequest.setRequestHeader("Content-Type", "application/json");
        let obj = { username: username, password: password };
        let body = JSON.stringify(obj);
        postRequest.responseType = "json";
        postRequest.onload = () => {
            if (postRequest.readyState === 4 && postRequest.status === 200) {
                var element = document.getElementById("login-success");
                element.classList.add("display")
            } else {
                console.log("Username and password not posted to database.");
            }
        }
        postRequest.send(body);
    }

    
    hideMessages = () => {
        var userErrorElem = document.getElementById("username-error");
        userErrorElem.classList.remove("display");
        var passErrorElem = document.getElementById("password-error");
        passErrorElem.classList.remove("display");
        var successElem = document.getElementById("login-success");
        successElem.classList.remove("display");
    }
    
    render() {

        return (
            <div>
                <form className="container2">
                    <h2>Create a User</h2>
                    <input className="username-input" onChange={this.usernameTextChange} type="text" placeholder="Enter Username" name="username" required />
                    <strong id="username-error" className="login-error">Username already exists</strong>
                    <input type="password" onChange={this.passwordTextChange} placeholder="Enter Password" name="password" required />
                    <input type="password" onChange={this.confirmPasswordTextChange} placeholder="Repeat Password" name="password" required />
                    <strong id="password-error" className="login-error">Passwords do not match</strong>
                    <strong id="login-success" className="login-success">User created successfully</strong>
                    <input type="button" className="login-button" value="Create User" onClick={this.submitUsernameAndPassword} />
                </form>
            </div>
        );
    }
}