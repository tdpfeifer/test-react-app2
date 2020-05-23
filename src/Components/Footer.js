import React from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Grid,
  IconButton,
} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Facebook, Twitter, Instagram, YouTube} from '@material-ui/icons';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function Footer() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        display="flex"
        height="800px"
        pt={8}
        pb={8}
        style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item lg={6} md={6} sm={12}>
              <Box pb={3}>
                <Typography
                  variant="h4"
                  style={{
                    color: '#ffffff',
                  }}
                >
                  Subcribe for the latest updates!
                </Typography>
              </Box>
              <TextField
                fullWidth
                id="Subscribe"
                label="Enter E-mail"
                variant="outlined"
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <Instagram />
              </IconButton>
              <IconButton>
                <YouTube />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
