import React, { Component } from 'react';
export default class InputBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: ""
        }
    }

    taskChange = (e) => {
        this.setState({
            task: e.target.value
        });
    }

    submitTask = () => {
        this.props.postTaskToDb(this.state.task);
        document.getElementById("taskInputBar").value='';
    }

    submitTaskWithEnter = (e) => {
        if (e.key === "Enter") {
            this.submitTask();
        }
    }

    render() {
        return (
            <div className="input-group mb-3 task-input col-10">
                <input id="taskInputBar" type="text" onChange={this.taskChange} onKeyDown={this.submitTaskWithEnter} className="form-control task-input-bar" placeholder="Write a task..." aria-label="Task input" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button type="button" onClick={this.submitTask} className="btn btn-outline-secondary task-button pl-3">&nbsp; + &nbsp;</button>
                </div>
            </div>
        );
    }
}