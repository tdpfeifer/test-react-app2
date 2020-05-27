import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Nav from './Nav';
import {Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Nav />
          </IconButton>
          <Box
            style={{width: '100%'}}
            display="flex"
            justifyContent="space-between"
          >
            <Button color="inherit" href="/">
              Leblanc Coffee Co.
            </Button>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box style={{height: 64}}></Box>
    </div>
  );
}
