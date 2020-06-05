import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';
import Product1 from '../Img/Product-1.png';
import {ProductsList} from './ListOfProducts';

export default function Product() {
  const first = ProductsList[0];

  return (
    <Grid container spacing={3}>
      <>
        <Grid item xs={12} md={7}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{
              width: '100%',
            }}
          >
            <img src={Product1} alt="" style={{width: '60%'}} />
          </Box>
        </Grid>
        {ProductsList.map(({first(name)},i) => (
          <Grid item xs={12} md={5} key={first.name}>
            <Typography>{name}</Typography>
          </Grid>
        ))}
      </>
    </Grid>
  );
}
