import React, { Component } from 'react';
import ExistingUserLogin from './ExistingUserLogin';
import NewUserLogin from './NewUserLogin';
import './LoginPage.css';
export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newUser: false
        }
    }

    changeToNewUser = () => {
        this.setState({
            newUser: true
        })
    }

    changeToExistingUser = () => {
        this.setState({
            newUser: false
        })
    }

    render() {

        let existingUserForm =
            <div>
                <ExistingUserLogin login={this.props.login}/>
                <div className="new-user-button-div">
                    <button className="new-user-button" onClick={this.changeToNewUser}>New user?</button>
                </div>
            </div>

        let newUserForm =
            <div>
                <NewUserLogin />
                <div className="new-user-button-div">
                    <button className="new-user-button" onClick={this.changeToExistingUser}>Existing User?</button>
                </div>
            </div>

        return (
            <div>
                {(this.state.newUser ? newUserForm : existingUserForm)}
            </div>
        );
    }
}