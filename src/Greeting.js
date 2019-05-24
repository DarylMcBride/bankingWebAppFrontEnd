import React, { Component } from 'react';
import './index.css';
export default class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="greeting">
                <h3>Enter a task to start your list...</h3>
            </div>
        );
    }
}