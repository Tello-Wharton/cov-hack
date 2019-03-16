import React, { Component } from 'react';
import Carding from "./Carding";

class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
      endpoint: "http://localhost:8080/"
    };
  }

  componentDidMount() {
    let  self = this;

    var clientWebSocket = new WebSocket("ws://localhost:8080/event-emitter");
    clientWebSocket.onopen = function() {
        console.log("WebSocket Opened!")
    };
    clientWebSocket.onclose = function(error) {
        console.log("WebSocket Closed </3")
    };
    clientWebSocket.onerror = function(error) {
        console.log("WebSocket Error >:(")
    };
    clientWebSocket.onmessage = function(event) {
        console.log(JSON.parse(event.data));
    }

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
