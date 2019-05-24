import React, { Component } from 'react';
export default class HeaderLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <header>
                <div className="header">
                    <h1>ToDo</h1>
                    <p>A website to organise tasks</p>
                </div>
            </header>
        );
    }
}
