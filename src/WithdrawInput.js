import React, { Component } from 'react';
export default class WithdrawInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    valueChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }  

    submitValue = () => {
        this.props.withdraw(this.state.value)
        console.log(this.state.value)
    }

    render() {
        return (
            <div class="transaction-form">
                <strong>Withdraw:</strong>
                <br />
                <input type="number" min="0" onChange={this.valueChange} />
                <input type="button" value="Confirm" onClick={this.submitValue}/>
            </div>
        );
    }
}