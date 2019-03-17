import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import axios from 'axios';


class Carding extends Component {
  constructor(props) {
      super(props);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const pizzaorder = {
      pizzaid: this.props.id,
      pizzaname: this.props.title,
      pizzaprice: this.props.price
    }

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
