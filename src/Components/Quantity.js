import React from 'react';
import {IconButton, Typography, Box} from '@material-ui/core';
import {Remove, Add} from '@material-ui/icons';

class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement() {
    if (this.state.counter === 1) {
      this.setState({
        counter: 1,
      });
    } else {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  }

  render() {
    return (
      <Box
        pt={3}
        pb={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        style={{width: '100%', maxWidth: 500}}
      >
        <IconButton onClick={this.decrement.bind(this)}>
          <Remove />
        </IconButton>
        <Typography>{this.state.counter}</Typography>
        <IconButton onClick={this.increment.bind(this)}>
          <Add />
        </IconButton>
      </Box>
    );
  }
}

export default Quantity;
