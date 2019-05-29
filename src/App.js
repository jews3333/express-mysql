import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    username:null,
    users:null
  }

  componentDidMount(){
    fetch('/api/getUsername')
    .then(res => res.json())
    .then(user => this.setState({username: user.username}));

    fetch('/getData')
    .then(res => res.json())
    .then(user => this.setState({users : user}));
  }

  renderUser = () => {
    const users = this.state.users.map((user, index) => {
      return <div key={index}>{user.id},{user.description},{user.title},{user.author}</div>
    })
    return users
  }

  render(){

    const { username, users } = this.state;

    return (
      <div className="App">
        <p>{username ? <h1>{`Hellow ${username}`}</h1> : <h1>Loading...</h1>}</p>
        <p>{users ? <p>{this.renderUser()}</p> : null}</p>
      </div>
    );
  }
}

export default App;
