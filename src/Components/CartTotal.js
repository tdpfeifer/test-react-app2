import React from 'react';
import {Button, Typography, Box} from '@material-ui/core';

export default function CartTotal() {
  return (
    <>
      <Box p={3}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={2}
        >
          <Typography variant="h6">Total:</Typography>
          <Typography variant="subtitle2">$694.20</Typography>
        </Box>
        <Button variant="contained" color="primary" fullWidth>
          Checkout
        </Button>
      </Box>
    </>
  );
}
