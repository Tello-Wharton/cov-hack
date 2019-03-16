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
        <Card>
          <CardImg top width="20%" src={this.props.imgurl} alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>{this.props.type}</CardSubtitle>
            <CardText>{this.props.price}</CardText>
            <Button>Add To Basket</Button>
          </CardBody>
        </Card>
      <br></br>
      </div>
    );
  };
}


export default Carding;
