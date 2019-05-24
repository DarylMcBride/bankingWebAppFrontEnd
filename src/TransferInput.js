import React, { Component } from 'react';
export default class TransferInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            otherUserId: 0
        }
    }

    valueChange = (r) => {
        this.setState({
            value: r.target.value
        });
    }
    
    userIdChange = (e) => {
        this.setState({
            otherUserId: e.target.otherUserId
        });
    }

    submit = () => {
        //this.props.transfer(this.state.value, this.state.userId)
        console.log(this.state.value)
        console.log("user id: " + this.state.otherUserId)
    }

    render() {
        return (
            <div className="transaction-form">
                <strong>Transfer:</strong>
                <br />
                Amount:
                <input type="number" min="0" onChange={this.valueChange} />
                <br />
                User ID:
                <input type="number" min="0" onChange={this.userIdChange} />
                <input type="button" value="Confirm" onClick={this.submit} />
            </div>
        );
    }
}