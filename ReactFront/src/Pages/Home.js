import React, { Component } from 'react';
import Carding from "./Carding";
import ModalLogIn from "./ModalLogIn";
import ModalBasket from "./ModalBasket";
import axios from 'axios';
import PropTypes from 'prop-types';


class Home extends Component {
  static contextTypes = {
      currentUser: PropTypes.object
  };

  constructor(props, context) {
  super(props, context);
  this.state = {
      normalpizzaid : [],
      normalpizzatitles : [],
      normalpizzaimgurl : [],
      normalpizzaprice : [],
      normalpizzatype : [],
      timestamp: "",
      user: [],
      pizzas: [],
      open: false
    };
  }

handleOpen = () => {
  this.setState({ open: true });
};

handleClose = () => {
  this.setState({ open: false });
};

  componentDidMount() {
    const self = this;

    let ip = require("./ip.json")["ip"];
    axios.get('http://' + ip + ':8080/menu/da11ln').then(function (response) {
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

    const clientWebSocket = new WebSocket("ws://" + ip + ":8080/state-emitter");

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
      const pizzas = []

      for(var users in timestamp["state"]["users"]) {
        usernames.push(timestamp["state"]["users"][users]['username']);
      }

      for(var key in timestamp["state"]["pizzas"]) {
        pizzas.push(timestamp["state"]["pizzas"][key]);
      }

      self.setState({
         timestamp: timestamp.version,
         user: usernames,
         pizzas: pizzas
       });
    }
  }



  render() {
    return (
      <div className="App">
        <div>

        <ModalLogIn/>
        <ModalBasket/>

        <h1>Users</h1>
        {this.state.user.map((ref, i) =>
          <p>{this.state.user[i]}</p>
        )}

        <div className="foods">
          {this.state.normalpizzatitles.map((ref, i) => {
            var marq = <span></span>
            if(i % 5 === 0) {
              var offsetter = <span></span>
                if( i % 10 === 0) {
                  offsetter = <span>🍕</span>
                }
                marq = <marquee behaviour="slide" hspace="0">
                  {offsetter}😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕😍🍕
                </marquee>
            }

            return <React.Fragment>
              {marq}
              <Carding
                  id = {this.state.normalpizzaid[i]}
                  imgurl = {this.state.normalpizzaimgurl[i]}
                  title = {this.state.normalpizzatitles[i]}
                  type = {this.state.normalpizzatype[i]}
                  price = {this.state.normalpizzaprice[i]}
                  counter = {i}
                  />
            </React.Fragment>
          }
          )}
      </div>
    </div>
  </div>
    );
  }
}

export default Home;
