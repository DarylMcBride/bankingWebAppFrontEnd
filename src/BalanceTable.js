import React, { Component } from 'react';
export default class BalanceTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <table className="balance-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.props.userId}</td>
                        <td>{this.props.balance}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}