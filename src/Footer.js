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
                    <span className="text-muted">Jake Evans - QA Individual Project</span>
                </div>
            </footer>
        );
    }
}