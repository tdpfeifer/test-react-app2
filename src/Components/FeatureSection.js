import React from 'react';
import {Grid, Typography, Box, ListItem} from '@material-ui/core';
import Feature1 from '../Img/Feature-1.png';
import Feature2 from '../Img/Feature-2.png';
import Feature3 from '../Img/Feature-3.png';

const CoffeeList = [
  {name: 'Time and Temperature', size: '15.9', img: Feature1},
  {name: 'Tightrope', size: '15.9', img: Feature2},
  {name: 'OMG (Oh My God)', size: '15.9', img: Feature3},
];

export default function FeatureSection() {
  return (
    <Grid container spacing={3}>
      <>
        {CoffeeList.map(({name, size, img}, i) => (
          <Grid item sm={12} md={4} key={i}>
            <ListItem button>
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                p={3}
              >
                <img src={img} alt="" style={{width: '100%'}} />
                <Typography variant="h4">{name}</Typography>
                <Typography variant="caption">{size}</Typography>
              </Box>
            </ListItem>
          </Grid>
        ))}
      </>
    </Grid>
  );
}
