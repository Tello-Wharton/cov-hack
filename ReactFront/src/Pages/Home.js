import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import { connect } from "./api";
import Carding from "./Carding";
import axios from 'axios';

class Home extends Component {
  constructor(props) {
  super(props);
  this.state = {
      name: "lol"
    };
  }

  

  componentDidMount() {
    axios.get('http://localhost:8080/menu/da11ln').then(function (response) {

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
