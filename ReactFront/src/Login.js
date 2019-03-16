import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
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
        // console.log(res.data);
        // window.location.reload();
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
