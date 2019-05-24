import React, { Component } from 'react';
import Task from './Task';
import './table-stylesheet.css';
export default class TaskTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="table-div">
                    <table className="table table-borderless">
                        <thead className="thead-dark">
                            <tr>
                                <th className="num-col" scope="col"></th>
                                <th className="task-col" scope="col">Task</th>
                                <th className="desc-col" scope="col"></th>
                                <th className="button-col" scope="col"></th>
                            </tr>
                        </thead>
                        <tbody id="tasks">
                            {this.props.allTasks.map((task, i) => <Task
                                key={"task" + i}
                                task={task.name}
                                index={i}
                                taskId={task.id}
                                dateSet={task.dateSet}
                                complete={task.complete}
                                description={task.description}
                                deleteTaskInDb={this.props.deleteTaskInDb}
                                updateTaskInDb={this.props.updateTaskInDb} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}