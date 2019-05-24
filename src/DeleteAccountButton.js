import React, { Component } from 'react';
export default class DeleteAccountButton extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <input className="btn btn-primary log-out" type="submit" value="Delete Account" onClick={this.props.deleteAccount} />
            </div>
        );
    }
}