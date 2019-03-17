import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
      open: false,
      name: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const datasend = {
      'username': this.state.name
    }

    axios.post(`http://localhost:8080/login`, datasend)
      .then(res => {
        console.log(res);
    })
 }

  render() {
    return (
      <div className="App">
        <p>Login</p>
        <input name="name" placeholder="Enter Username" onChange={e => this.handleChange(e)}/>
        <button onClick={(e) => this.onSubmit(e)}>Send</button>
      </div>
    );
  }
}


export default Login;
