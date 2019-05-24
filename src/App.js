import React, { Component } from 'react';
import HeaderLogin from './HeaderLogin';
import LoginForm from './LoginForm';

import Header from './Header';
import Greeting from './Greeting';
import BalanceTable from './BalanceTable';
import WithdrawInput from './WithdrawInput';
import DepositInput from './DepositInput';
import TransferInput from './TransferInput';
import DeleteAccountButton from './DeleteAccountButton';
import Footer from './Footer'

import { backend_IP } from './constants';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      userId: -1,
      balance: 0
    }
  }

  login = (userId) => {
    this.setState({
      isLoggedIn: true
    })
    this.setState({
      userId: userId
    })
    this.getBalance();
  }

  logout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  deleteAccount = () => {
    let deleteRequest = new XMLHttpRequest();
    deleteRequest.open('DELETE', `http://${backend_IP}/api/v1/user/` + this.userId);
    deleteRequest.onload = () => {
      if (deleteRequest.readyState === 4 && deleteRequest.status === 200) {
        this.setState({
          isLoggedIn: false
        })
      } else {
        console.log("User not deleted from database");
      }
    }
    deleteRequest.send(null);
  }

  getBalance = (userId) => {
    //get balance from DB 
    this.setState({
      //balance: 
    })
  }

  withdraw = (value) => {
    //minus value from balance in DB
    //if DB updated then display new balance
    //if error then display error

  }

  deposit = (value) => {
    //add value from balance in DB
    //if DB updated then display new balance
    //if error then display error
  }

  transfer = (value, otherUserId) => {
    //minus value from balance in DB for this ID
    //if DB updated then add value to balance in DB for other ID
    //if DB updated then display new balance
    //if error then return balance in DB for this ID back to original value
  }

  /*
  emptyArray = () => {
    this.setState({
      allTasks: []
    });
  }
  */

  /*
  addToArray = (newTask) => {
    let tempArray = this.state.allTasks;
    tempArray.unshift(newTask)
    this.setState({
      allTasks: tempArray
    })
  }
  */

  /*
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
  */

  /*
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
   */

  /*
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
  */

  /*
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
  */

  /*
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
  */

  /*
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
  */

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
        <BalanceTable userId={this.userId} balance={this.balance} />
        <WithdrawInput withdraw={this.withdraw}/>
        <DepositInput deposit={this.deposit}/>
        <TransferInput />
        <DeleteAccountButton deleteAccount={this.deleteAccount} />
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