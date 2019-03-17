import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        open: false,
      };

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

    console.log(pizzaorder);

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
      self.handleClose()
    };
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add to Basket
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.title} Price: {this.props.price}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              THIS WILL BE ADDED TO YOUR BASKET
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={(e) => this.onSubmit(e)} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
