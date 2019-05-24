import React, { Component } from 'react';
import HeaderLogin from './HeaderLogin';
import LoginForm from './LoginForm';

import Header from './Header';
import Greeting from './Greeting';
import InputBar from './InputBar';
import ButtonGroup from './ButtonGroup';
import TaskTable from './TaskTable';
import Footer from './Footer'

import {backend_IP} from './constants';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userId: -1,
      allTasks: [],
    }
  }

  login = (userId) => {
    this.setState({
      isLoggedIn: true
    })
    this.setState({
      userId: userId
    })
    this.getDbTasks();
  }

  logout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  emptyArray = () => {
    this.setState({
      allTasks: []
    });
  }

  addToArray = (newTask) => {
    let tempArray = this.state.allTasks;
    tempArray.unshift(newTask)
    this.setState({
      allTasks: tempArray
    })
  }

  getDbTasks = () => {
    this.emptyArray();
    let getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://${backend_IP}/api/v1/tasks/userId/` + this.state.userId);
    getRequest.responseType = "json";
    getRequest.onload = () => {
      let data = getRequest.response;
      for (let task of data) {
        this.addToArray(task);
      }
    }
    getRequest.send();
  }


  getCompletedDbTasks = () => {
    this.emptyArray();
    let getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://${backend_IP}/api/v1/tasks/userId/` + this.state.userId + "/true");
    getRequest.responseType = "json";
    getRequest.onload = () => {
      let data = getRequest.response;
      for (let task of data) {
        this.addToArray(task);
      }
    }
    getRequest.send();
  }

  getIncompleteDbTasks = () => {
    this.emptyArray();
    let getRequest = new XMLHttpRequest();
    getRequest.open('GET', `http://${backend_IP}/api/v1/tasks/userId/` + this.state.userId + "/false");
    getRequest.responseType = "json";
    getRequest.onload = () => {
      let data = getRequest.response;
      for (let task of data) {
        this.addToArray(task);
      }
    }
    getRequest.send();
  }

  postTaskToDb = (newTask) => {
    let postRequest = new XMLHttpRequest();
    postRequest.open('POST', `http://${backend_IP}/api/v1/tasks/`);
    postRequest.setRequestHeader("Content-Type", "application/json");
    let obj = { name: newTask, userId: this.state.userId };
    let body = JSON.stringify(obj);
    postRequest.responseType = "json";
    postRequest.onload = () => {
      if (postRequest.readyState === 4 && postRequest.status === 200) {
        this.addToArray(postRequest.response);
      } else {
        console.log("Task not posted to database.");
      }
    }
    postRequest.send(body);
  }

  deleteTaskInDb = (taskId) => {
    let deleteRequest = new XMLHttpRequest();
    deleteRequest.open('DELETE', `http://${backend_IP}/api/v1/tasks/` + taskId);
    deleteRequest.onload = () => {
      if (deleteRequest.readyState === 4 && deleteRequest.status === 200) {
        this.emptyArray();
        this.getDbTasks();
      } else {
        console.log("Task not deleted from database");
      }
    }
    deleteRequest.send(null);
  }

  updateTaskInDb = (taskId, taskName, description, dateSet, ticked) => {
    let putRequest = new XMLHttpRequest();
    putRequest.open('PUT', `http://${backend_IP}/api/v1/tasks/` + taskId);
    putRequest.setRequestHeader("Content-Type", "application/json");
    let obj = { id: taskId, name: taskName, description: description, dateSet: dateSet, complete: ticked, userId: this.state.userId };
    let body = JSON.stringify(obj);
    putRequest.onload = () => {
      if (putRequest.readyState === 4 && putRequest.status === 200) {
        this.emptyArray();
        this.getDbTasks();
      } else {
        console.log("Task not updated in database.");
      }
    }
    putRequest.send(body);
  }

  render() {

    let login =
      <div>
        <HeaderLogin />
        <LoginForm login={this.login} />
        <Footer />
      </div>

    let mainpage =
      <div>
        <Header logout={this.logout} />
        <Greeting />
        <InputBar postTaskToDb={this.postTaskToDb} />
        <ButtonGroup getCompletedDbTasks={this.getCompletedDbTasks} getDbTasks={this.getDbTasks} getIncompleteDbTasks={this.getIncompleteDbTasks} />
        <TaskTable allTasks={this.state.allTasks} deleteTaskInDb={this.deleteTaskInDb} updateTaskInDb={this.updateTaskInDb} />
        <Footer />
      </div>;

    return (
      <div>
        {(this.state.isLoggedIn ? mainpage : login)}
      </div>
    );

  }
}
export default App;