import React from 'react';
import {Grid, Typography, Box, ListItem} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Product1 from '../Img/Product-1.png';
import Product2 from '../Img/Product-2.png';
import Product3 from '../Img/Product-3.png';
import Product4 from '../Img/Product-4.png';
import Product5 from '../Img/Product-5.png';
import Product6 from '../Img/Product-6.png';
import Feature1 from '../Img/Feature-1.png';
import Feature2 from '../Img/Feature-2.png';
import Feature3 from '../Img/Feature-3.png';

const ProductsList = [
  {
    name: 'No.7 House Blend',
    size: '11',
    maker: 'Boxcar',
    price: '15.00',
    rating: '3.4',
    img: Product1,
  },
  {
    name: 'Phantom Limb Blend',
    size: '12',
    maker: 'Huckleberry',
    price: '20.00',
    rating: '5',
    img: Product2,
  },
  {
    name: 'Chicago House Blend',
    size: '12',
    maker: 'Passion House',
    price: '18.85',
    rating: '4.5',
    img: Product3,
  },
  {
    name: 'Time and Temperature',
    size: '12',
    maker: 'Tandem',
    price: '14.99',
    rating: '3.8',
    img: Feature1,
  },
  {
    name: 'Tightrope',
    size: '12',
    maker: 'Highwire',
    price: '17.99',
    rating: '5',
    img: Feature2,
  },
  {
    name: 'OMG (Oh My God)',
    size: '12',
    maker: 'AKA',
    price: '18.99',
    rating: '4.2',
    img: Feature3,
  },
  {
    name: 'Colombia San Roque',
    size: '12',
    maker: 'La Colombe',
    price: '21.20',
    rating: '4.1',
    img: Product4,
  },
  {
    name: 'Bold and the Beautiful',
    size: '10',
    maker: 'Spyhouse',
    price: '17.65',
    rating: '4',
    img: Product5,
  },
  {
    name: 'East Timor',
    size: '12',
    maker: 'Caffe Vita',
    price: '21.20',
    rating: '3.4',
    img: Product6,
  },
];

export default function Products() {
  return (
    <Grid container spacing={3}>
      <>
        {ProductsList.map(({name, size, maker, price, rating, img}, i) => (
          <Grid item sm={12} md={4} key={i}>
            <ListItem button>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                p={3}
              >
                <img src={img} alt="" style={{width: '100%'}} />
                <Typography variant="overline">{maker}</Typography>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="caption">{size} oz.</Typography>
                <Typography variant="subtitle1">${price}</Typography>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating name="read-only" value={rating} readOnly />
                </Box>
              </Box>
            </ListItem>
          </Grid>
        ))}
      </>
    </Grid>
  );
}
