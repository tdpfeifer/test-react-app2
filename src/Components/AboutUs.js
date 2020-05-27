import React from 'react';
import {Grid, Box, Typography, makeStyles} from '@material-ui/core';
import Hero from '../Img/About-Us-min.jpg';

const useStyles = makeStyles((theme) => ({
  boxPadding: {
    [theme.breakpoints.up('xs')]: {padding: 16},
    [theme.breakpoints.up('lg')]: {padding: 80},
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid
        item
        lg={6}
        md={4}
        xs={2}
        style={{
          height: '90vh',
          backgroundImage: `url(${Hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Grid>
      <Grid item lg={6} md={8} xs={10}>
        <Box
          style={{height: '80vh'}}
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.boxPadding}
          flexDirection="column"
        >
          <Typography variant="h4" style={{paddingBottom: 16}}>
            With Leblanc, Good Times are Brewing.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            porta felis. Ut et risus turpis. Maecenas sit amet velit metus. Cras
            ultricies elit non tellus aliquet lacinia. Duis rutrum, turpis sed
            dignissim pellentesque, tellus nibh porta ex, eu mattis felis quam a
            diam. Aenean placerat arcu ipsum, sit amet sodales erat varius at.
            Aliquam blandit nibh a ligula hendrerit, vel lobortis massa aliquet.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
