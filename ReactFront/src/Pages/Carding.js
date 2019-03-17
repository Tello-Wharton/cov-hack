import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import axios from 'axios';


class Carding extends Component {
  constructor(props) {
      super(props);
      this.test = new WebSocket("ws://localhost:8080/state-updater");

    this.test.onclose = function(error) {
      console.log("WebSocket Closed ?")
      console.log(error)
    };

    this.test.onerror = function(error) {
      console.log("WebSocket Error >:(")
      console.log(error)
    };

    // var functionJson = {
    //   functionName: "test",
    //   functionArgs: JSON.stringify({oof: "oof", plz: "plz?"})
    // }

    // this.test.onopen = () => {
    //   setInterval(() => {
    //     this.test.send(JSON.stringify(functionJson));
    //     console.log("FUCK YEAH!");
    //   }, 1000 );
    // };
  }
    



  onSubmit = (e) => {
    e.preventDefault();

    const pizzaorder = {
      pizzaid: this.props.id,
      pizzaname: this.props.title,
      pizzaprice: this.props.price
    }



    var functionJson = {
      functionName: "addPizza",
      functionArgs: this.props.title
    }

    this.test.send(JSON.stringify(functionJson));


    console.log(pizzaorder);

    // const test = new WebSocket("ws://localhost:8080/state-updater");
    // test.onopen = function() {
    //   console.log("YAY")
    //   setInterval(() => {
    //     test.send("FUCK YEAH!");
    //     console.log("FUCK YEAH!");
    //   }, 1000 );
    // };
  }


  render() {
    return (
      <div>
        <Card style={{backgroundImage: "url(" + this.props.imgurl + ")"}}>
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>{this.props.type}</CardSubtitle>
            <div className="card-footer">
              <CardText>{this.props.price}</CardText>
              <Button onClick={(e) => this.onSubmit(e)}>🛒</Button>
            </div>
          </CardBody>
        </Card>
      <br></br>
      </div>
    );
  };
}


export default Carding;
