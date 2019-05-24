import React, { Component } from 'react';
import './button-group.css';
export default class ButtonGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
            <div className="btn-group">
                <input
                    className="sortByButton"
                    type="button"
                    onClick={this.props.getDbTasks}
                    value="All" />
                <input
                    className="sortByButton"
                    type="button"
                    onClick={this.props.getIncompleteDbTasks}
                    value="Incomplete" />
                <input
                    className="sortByButton"
                    type="button"
                    onClick={this.props.getCompletedDbTasks}
                    value="Completed" />
            </div>
            </div>
        )
    }
}
