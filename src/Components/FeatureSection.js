import React from 'react';
import {Grid, Typography, Box, ListItem} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Feature1 from '../Img/Feature-1.png';
import Feature2 from '../Img/Feature-2.png';
import Feature3 from '../Img/Feature-3.png';

export const CoffeeList = [
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
];

export default function FeatureSection() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          pt={3}
          pl={3}
          pr={3}
        >
          <Typography style={{textDecoration: 'underline'}} variant="h4">
            Featured Coffee
          </Typography>
        </Box>
      </Grid>
      <>
        {CoffeeList.map(({name, size, maker, price, rating, img}, i) => (
          <Grid item xs={12} md={4} key={i}>
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
