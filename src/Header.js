import React, { Component } from 'react';
export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="row banner">
                <div className="col-9">
                    <h1 className="">ToDo</h1>
                    <p className="">A website to organise tasks</p>
                </div>
                <div className="col">
                    <input className="btn btn-primary log-out" type="submit" value="Log Out" onClick={this.props.logout} />
                </div>
            </div>
        );
    }
}