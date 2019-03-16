import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import { connect } from "./api";
import Carding from "./Carding";

class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
      endpoint: "http://localhost:8080/"
    };

  connect(message => {
      console.log(message);
    });
  }

  componentDidMount() {
    let  self = this;

    const socket = socketIOClient(self.state.endpoint)

    //socket.emit('gryo', 'gryo')
    //socket.emit('acceleration', 'acceler')
  }


  render() {
    return (
      <div className="App">
        <p>Home</p>
        <Carding
          imgurl = "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          title = "Large Cheese Pizza"
          type = "Pizza"
          price = "£6"
          />
          <Carding
            imgurl = "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            title = "Large Cheese Pizza"
            type = "Pizza"
            price = "£6"
            />
      </div>
    );
  }
}

export default Home;
