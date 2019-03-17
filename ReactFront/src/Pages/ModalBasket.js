import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import axios from 'axios';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class SimpleModalBasket extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      open: false,
      name: "",
      pizzas: []
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

      console.log(timestamp)

      const pizzas = []

      for(var key in timestamp["state"]["pizzas"]) {
        pizzas.push(timestamp["state"]["pizzas"][key]);
      }

      self.setState({
         timestamp: timestamp.version,
         pizzas: pizzas
       });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>Basket</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Basket
            </Typography>
            {this.state.pizzas.map((ref, i) =>
              <p>{this.state.pizzas[i]}</p>
            )}

          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModalBasket.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalBasketWrapped = withStyles(styles)(SimpleModalBasket);

export default SimpleModalBasketWrapped;
