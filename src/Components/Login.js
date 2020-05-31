import React, {useState} from 'react';
import {Box, TextField, Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  textFieldPadding: {
    padding: '0 0 16px 0',
  },
});

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Box display="flex" flexDirection="column">
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.textFieldPadding}
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={classes.textFieldPadding}
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button disabled={!validateForm()} variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Box>
    // <div className="Login">
    //   <form onSubmit={handleSubmit}>
    //     <FormGroup controlId="email" bsSize="large">
    //       <ControlLabel>Email</ControlLabel>
    //       <FormControl
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </FormGroup>
    //     <FormGroup controlId="password" bsSize="large">
    //       <ControlLabel>Password</ControlLabel>
    //       <FormControl
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         type="password"
    //       />
    //     </FormGroup>
    //     <Button block bsSize="large" disabled={!validateForm()} type="submit">
    //       Login
    //     </Button>
    //   </form>
    // </div>
  );
}
