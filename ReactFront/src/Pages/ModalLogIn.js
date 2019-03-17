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

class SimpleModalLogin extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      open: false,
      name: ""
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
      e.preventDefault();

      const datasend = {
        'username': this.state.name
      }

      axios.post(`http://localhost:8080/login`, datasend)
        .then(res => {
          console.log(res);
      })
   }

  render() {
    const { classes } = this.props;

    return (
      <span>
        <Button onClick={this.handleOpen}>Login</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Login
            </Typography>
            <br></br>
            <input name="name" placeholder="Enter Username" onChange={e => this.handleChange(e)}/>
            <button onClick={(e) => this.onSubmit(e)}>Send</button>

          </div>
        </Modal>
      </span>
    );
  }
}

SimpleModalLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalLoginWrapped = withStyles(styles)(SimpleModalLogin);

export default SimpleModalLoginWrapped;
