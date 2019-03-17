import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Carding extends Component {
  constructor(props) {
      super(props);
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
              <Button>🛒</Button>
            </div>
          </CardBody>
        </Card>
      <br></br>
      </div>
    );
  };
}


export default Carding;
