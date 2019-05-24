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
            text: e.target.value
        });
    }  

    render() {
        return (
            <div class="transaction-form">
                Withdraw:
                <input type="number" min="0" onChange={this.valueChange} />
                <input type="buttton" value="0" onClick={this.props.withdraw(this.value)} />
            </div>
        );
    }
}