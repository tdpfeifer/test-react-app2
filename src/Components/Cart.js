import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {Close, ShoppingCart} from '@material-ui/icons/';
import {IconButton, Box, Typography, Badge, Divider} from '@material-ui/core';
import {ProductsList} from './ListOfProducts';
import CartTotal from './CartTotal';

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
});

const Cart = () => {
  const classes = useStyles();

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={() => setOpen(true)}
      >
        <Badge badgeContent={9} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={isOpen} onClose={() => setOpen(false)}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pt={1}
          pr={1}
          pb={1}
          pl={3}
        >
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <Box fullWidth>
          <Divider />
        </Box>
        <Box
          style={{
            height: '75vh',
            overflowY: 'scroll',
            WebkitScrollbar: {
              display: 'none',
            },
          }}
        >
          <List className={classes.list} component="nav">
            {ProductsList.map(({name, price, img}) => (
              <Box display="flex" key={name}>
                <Box>
                  <img src={img} alt="" style={{width: 80}} />
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{width: '100%'}}
                  pr={3}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Typography variant="subtitle1">{name}</Typography>
                    <Typography variant="body2">{price}</Typography>
                  </Box>
                  <Box display="flex" alignItems="flex-end">
                    <Typography variant="subtitle2">x3</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </List>
        </Box>
        <CartTotal />
      </Drawer>
    </>
  );
};

export default Cart;
