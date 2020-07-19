import React from 'react';
import {Grid, Typography, Box, Divider} from '@material-ui/core';
import Product1 from '../Img/Product-1.png';
import {ProductsList} from './ListOfProducts';
import Rating from '@material-ui/lab/Rating';
import Quantity from './Quantity';

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
        <Grid item xs={12} md={8}>
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
        <Grid item xs={12} md={4}>
          <Box
            p={1}
            style={{height: '100%'}}
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <Box pt={3} pb={3} display="flex" flexDirection="column">
              <Typography variant="h6">{firstMaker}</Typography>
              <Typography variant="h3">{firstName}</Typography>
              <Box display="flex">
                <Typography variant="h6">
                  {firstPrice} | {firstSize}
                </Typography>
              </Box>
              <Rating name="read-only" value={firstRating} readOnly />
            </Box>
            <Divider />
            <Quantity />
          </Box>
        </Grid>
      </>
    </Grid>
  );
}
