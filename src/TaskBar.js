import React, { Component } from 'react';
import './taskbar.css';
export default class TaskBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <li><input
                        className={"sortByButton"}
                        id={""}
                        type="button"
                        onClick={this.props.getDbTasks}
                        value="All" /></li>
                    <li><input
                        className={"sortByButton"}
                        id={""}
                        type="button"
                        onClick={this.props.getIncompleteDbTasks}
                        value="Incomplete" /></li>
                    <li><input
                        className={"sortByButton"}
                        id={""}
                        type="button"
                        onClick={this.props.getCompletedDbTasks}
                        value="Completed" /></li>
                </ul>
            </div>
        )
    }
}
