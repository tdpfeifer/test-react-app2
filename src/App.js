import React from 'react';
import './App.css';
import FrontPage from './Components/FrontPage';
import ButtonAppBar from './Components/ButtonAppBar';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#558b2f',
    },
    secondary: {
      main: '#536dfe',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <ButtonAppBar />

      <FrontPage />
    </>
  </ThemeProvider>
);

export default App;
