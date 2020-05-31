import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {
  Button,
  Fade,
  Backdrop,
  Typography,
  IconButton,
  Box,
} from '@material-ui/core';
import Login from './Login';
import {Close} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    border: 0,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down('sm')]: {padding: 32, height: '90%'},
  },
  textFieldPadding: {
    paddingBottom: 16,
  },
}));

export default function LoginModal() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
        className={classes.modal}
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              className={classes.textFieldPadding}
            >
              <Typography variant="h6" component="div">
                Login
              </Typography>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>
            <Login />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
