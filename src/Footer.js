import React, { Component } from 'react';
export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">QA Group Project</span>
                </div>
            </footer>
        );
    }
}