import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import FrontPage from './Components/FrontPage';
import ButtonAppBar from './Components/ButtonAppBar';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import AboutUs from './Components/AboutUs';

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
    <Router>
      <ButtonAppBar />
      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route exact path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
