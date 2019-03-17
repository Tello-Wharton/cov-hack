import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import Dialog from "./Dialog";



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

    const test = new WebSocket("ws://localhost:8080/state-updater");
    const self = this
    test.onopen = function() {
      var functionJson = {
        functionName: "addPizza",
        functionArgs: self.props.title
      }

      test.send(functionJson);
    };
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
              <Dialog
                title = {this.props.title}
                price = {this.props.price}
                />
            </div>
          </CardBody>
        </Card>
      <br></br>
      </div>
    );
  };
}


export default Carding;
