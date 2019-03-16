import React, { Component } from 'react';
import Carding from "./Carding";
import axios from 'axios';

class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
      normalpizzatitles : [],
      normalpizzaimgurl : [],
      normalpizzaprice : [],
      normalpizzatype : [],
      timestamp: ""
    };
  }

  componentDidMount() {
    const self = this;
    axios.get('http://localhost:8080/menu/da11ln').then(function (response) {
      for(var key in response["data"]["0"]["subcategories"]["1"]["products"]) {
          self.setState({
            normalpizzatitles:[...self.state.normalpizzatitles, response["data"]["0"]["subcategories"]["1"]["products"][key]["name"]],
            normalpizzaimgurl:[...self.state.normalpizzaimgurl, response["data"]["0"]["subcategories"]["1"]["products"][key]["imageUrl"]],
            normalpizzaprice:[...self.state.normalpizzaprice, response["data"]["0"]["subcategories"]["1"]["products"][key]["displayPrice"]],
            normalpizzatype:[...self.state.normalpizzatype, response["data"]["0"]["subcategories"]["1"]["products"][key]["type"]]
          });
      }

    })

    const clientWebSocket = new WebSocket("ws://localhost:8080/state-emitter");

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
      const timestamp = JSON.parse(event.data)

      console.log(timestamp);

      self.setState({
         timestamp: timestamp.version
       });
    }


   const test = new WebSocket("ws://localhost:8080/state-updater");
   test.onopen = function() {

     console.log("YAY")

     setInterval(() => {
       test.send("FUCK YEAH!");
       console.log("FUCK YEAH!");
     }, 1000 );
   };
  }


  render() {
    return (
      <div className="App">
        <p>Home</p>

        <p>{this.state.timestamp}</p>
        <div className="foods">
          {this.state.normalpizzatitles.map((ref, i) =>
            <Carding
              imgurl = {this.state.normalpizzaimgurl[i]}
              title = {this.state.normalpizzatitles[i]}
              type = {this.state.normalpizzatype[i]}
              price = {this.state.normalpizzaprice[i]}
              />
          )}
      </div>
    </div>
    );
  }
}

export default Home;
