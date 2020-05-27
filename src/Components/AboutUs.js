import React from 'react';
import {Grid} from '@material-ui/core';
import Hero from '../Img/About-Us-min.jpg';

export default function AboutUs() {
  return (
    <Grid container>
      <Grid
        item
        lg={6}
        style={{
          width: '100%',
          height: '90vh',
          backgroundImage: `url(${Hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Grid>
      <Grid item lg={6}></Grid>
    </Grid>
  );
}
