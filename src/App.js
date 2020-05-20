import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
    <Router>
      <ButtonAppBar />
      <Switch>
        <Route path="/">
          <FrontPage />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
