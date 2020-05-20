import React from 'react';
import {Grid, Typography} from '@material-ui/core';
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
    <>
      {CoffeeList.map(({name, size, img}, i) => (
        <div key={i}>
          <Grid item xs={4}>
            <img src={img} alt="" style={{width: '200px'}} />
            <Typography variant="h4">{name}</Typography>
            <Typography variant="caption">{size}</Typography>
          </Grid>
        </div>
      ))}
    </>
  );
}
