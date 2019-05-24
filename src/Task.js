import React, { Component } from 'react';
import TextInput from './TextInput';
export default class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <tr className={"task " + this.props.complete} id={"task" + this.props.taskId}>
                <td>{this.props.index + 1}</td>
                <td>
                    <label className="container">
                        {this.props.task}
                    </label>
                    <p className="date">
                        {this.props.dateSet}
                    </p>
                </td>
                <td>
                    <TextInput
                        task={this.props.task}
                        taskId={this.props.taskId}
                        dateSet={this.props.dateSet}
                        complete={this.props.complete}
                        description={this.props.description}
                        updateTaskInDb={this.props.updateTaskInDb} />
                </td>
                <td>
                    <input className="deleteButton"
                        type="button"
                        onClick={() => { this.props.deleteTaskInDb(this.props.taskId) }}
                        value="X" />
                    <input
                        className={"completeButton" + this.props.complete}
                        id={"completeButton" + this.props.taskId}
                        type="button"
                        onClick={() => this.props.updateTaskInDb(this.props.taskId, this.props.task, this.props.description, this.props.dateSet, true)}
                        value="Done?" />
                </td>
            </tr>
        )
    }
}
