import React from 'react';
import {IconButton, Typography, Box} from '@material-ui/core';
import {Remove, Add} from '@material-ui/icons';

class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  onclick(type) {
    this.setState((prevState) => ({
      count:
        type == 'add'
          ? prevState.count + 1
          : prevState.count - 1 || prevState.counter - 1,
    }));
  }

  //   decrement(){
  //     this.setState(prevState =>
  //         ({counter: prevState.counter? prevState.counter-1: 0})
  //     )
  // }

  render() {
    return (
      <Box
        pt={3}
        pb={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        style={{width: '100%'}}
      >
        <IconButton onClick={this.onclick.bind(this, 'sub')}>
          <Remove />
        </IconButton>
        <Typography>{this.state.count}</Typography>
        <IconButton onClick={this.onclick.bind(this, 'add')}>
          <Add />
        </IconButton>
      </Box>
    );
  }
}

export default Quantity;
