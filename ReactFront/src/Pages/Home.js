import React, { Component } from 'react';
import Carding from "./Carding";
import axios from 'axios';

class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
      normalpizzaid : [],
      normalpizzatitles : [],
      normalpizzaimgurl : [],
      normalpizzaprice : [],
      normalpizzatype : [],
      timestamp: "",
      user: []
    };
  }

  componentDidMount() {
    const self = this;
    axios.get('http://localhost:8080/menu/da11ln').then(function (response) {
      for(var key in response["data"]["0"]["subcategories"]["1"]["products"]) {
          self.setState({
            normalpizzaid:[...self.state.normalpizzaid, response["data"]["0"]["subcategories"]["1"]["products"][key]["productId"]],
            normalpizzatitles:[...self.state.normalpizzatitles, response["data"]["0"]["subcategories"]["1"]["products"][key]["name"]],
            normalpizzaimgurl:[...self.state.normalpizzaimgurl, response["data"]["0"]["subcategories"]["1"]["products"][key]["imageUrl"]],
            normalpizzaprice:[...self.state.normalpizzaprice, response["data"]["0"]["subcategories"]["1"]["products"][key]["displayPrice"]],
            normalpizzatype:[...self.state.normalpizzatype, response["data"]["0"]["subcategories"]["1"]["products"][key]["type"]]
          });
      }

    })

    const name = "spencer"

    axios.post(`http://localhost:8080/login`, name)
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.location.reload();
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
      const usernames = []

      // console.log(timestamp["state"]["users"]);
      for(var key in timestamp["state"]["users"]) {
        usernames.push(timestamp["state"]["users"][key]['username']);
      }

      self.setState({
         timestamp: timestamp.version,
         user: usernames
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
          {this.state.user.map((ref, i) =>
            <p>{this.state.user[i]}</p>
          )}

          {this.state.normalpizzatitles.map((ref, i) =>
            <Carding
              id = {this.state.normalpizzaid[i]}
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
