import React, { Component } from 'react';
export default class TextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plainText: true,
            text: "",
        }
    }

    textChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    changeToInput = () => {
        this.setState({
            plainText: false
        })
    }

    changeToTextOnEnter = (e) => {
        if (e.key === "Enter") {
            this.props.updateTaskInDb(this.props.taskId, this.props.task, this.state.text, this.props.dateSet, this.props.complete)
            this.setState({
                plaintext: true,
            })
        }
    }

    changeToText = () => {
            this.props.updateTaskInDb(this.props.taskId, this.props.task, this.state.text, this.props.dateSet, this.props.complete)
            this.setState({
                plaintext: true,
            })
    }

    updateDescription = () => {
        this.props.updateTaskInDb(this.props.taskId, this.props.task, this.state.text, this.props.dateSet, this.props.complete)
        this.setState({
            plaintext: true,
        })
    }

    render() {

        let text =
            <div className="description" onClick={() => this.changeToInput()}>
                <p>{(this.props.description ? this.props.description : "Click to enter a description...")}</p>
            </div>

        let input =
            <div>
                <input autoFocus onBlur={this.changeToText} className="desc-input" type="text" onChange={this.textChange} onKeyDown={this.changeToTextOnEnter} name="desc" />
                <input id="desc-input-button" type="button" value="+" onClick={this.updateDescription} />
            </div>

        return (
            <div>
                {(this.state.plainText ? text : input)}
            </div>
        );
    }
}