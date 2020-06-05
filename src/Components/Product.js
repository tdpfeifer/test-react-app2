import React from 'react';
import {Grid, Typography, Box} from '@material-ui/core';
import Product1 from '../Img/Product-1.png';
import {ProductsList} from './ListOfProducts';

const first = ProductsList[0];
var firstName = first.name;
var firstSize = first.size;
var firstMaker = first.maker;
var firstPrice = first.price;
var firstRating = first.rating;

export default function Product() {
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
        <Grid item xs={12} md={5}>
          <Box pt={3} display="flex" flexDirection="column">
            <Typography variant="h4">{firstName}</Typography>
            <Typography variant="overline">{firstSize}</Typography>
            <Typography variant="overline">{firstMaker}</Typography>
            <Typography variant="overline">{firstPrice}</Typography>
            <Typography variant="overline">{firstRating}</Typography>
          </Box>
        </Grid>
      </>
    </Grid>
  );
}
