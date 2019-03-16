import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import { connect } from "./api";
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

      glutenpizzatitles : [],
      glutenpizzaimgurl : [],
      glutenpizzaprice : [],
      glutenpizzatype : [],

      sidestitles : [],
      sidesimgurl : [],
      sidesprice : [],
      sidestype : [],

      desertstitles : [],
      desertsimgurl : [],
      desertsprice : [],
      desertstype : []
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
      //
      // for(var key in response["data"]["0"]["subcategories"]["2"]["products"]) {
      //   console.log(response["data"]["0"]["subcategories"]["2"]["products"][key]["name"]);
      // }

      // for(var key in response["data"]["1"]["subcategories"]["0"]["products"]) {
      //   console.log(response["data"]["1"]["subcategories"]["0"]["products"][key]["name"]);
      // }

      // for(var key in response["data"]["2"]["subcategories"]["0"]["products"]) {
      //   console.log(response["data"]["2"]["subcategories"]["0"]["products"][key]["name"]);
      // }

      //console.log(response["data"]["0"]["subcategories"]["1"]["products"]["0"]["name"]);
      //console.log(response["data"]["0"]["subcategories"]["1"]["products"]["0"]["imageUrl"]);
      //console.log(response["data"]["0"]["subcategories"]["1"]["products"]["0"]["displayPrice"]);
      //console.log(response["data"]["0"]["subcategories"]["1"]["products"]["0"]["type"]);
      //console.log(response["data"]["0"]["subcategories"]["1"]["products"]);

      // console.log(response["data"]["0"]["subcategories"]["2"]["products"]["0"]["name"]);
      // console.log(response["data"]["0"]["subcategories"]["2"]["products"]["0"]["imageUrl"]);
      // console.log(response["data"]["0"]["subcategories"]["2"]["products"]["0"]["displayPrice"]);
      // console.log(response["data"]["0"]["subcategories"]["2"]["products"]["0"]["type"]);
      //console.log(response["data"]["0"]["subcategories"]["2"]["products"]);

      // console.log(response["data"]["1"]["subcategories"]["0"]["products"]["0"]["name"]);
      // console.log(response["data"]["1"]["subcategories"]["0"]["products"]["0"]["imageUrl"]);
      // console.log(response["data"]["1"]["subcategories"]["0"]["products"]["0"]["displayPrice"]);
      // console.log(response["data"]["1"]["subcategories"]["0"]["products"]["0"]["type"]);

      // console.log(response["data"]["2"]["subcategories"]["0"]["products"]["0"]["name"]);
      // console.log(response["data"]["2"]["subcategories"]["0"]["products"]["0"]["imageUrl"]);
      // console.log(response["data"]["2"]["subcategories"]["0"]["products"]["0"]["displayPrice"]);
      // console.log(response["data"]["2"]["subcategories"]["0"]["products"]["0"]["type"]);
    })
  }


  render() {
    return (
      <div className="App">
        <p>Home</p>
        {this.state.normalpizzatitles.map((ref, i) =>
          <Carding
            imgurl = {this.state.normalpizzaimgurl[i]}
            title = {this.state.normalpizzatitles[i]}
            type = {this.state.normalpizzatype[i]}
            price = {this.state.normalpizzaprice[i]}
            />
        )}
      </div>
    );
  }
}

export default Home;
