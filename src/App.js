import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import FrontPage from './Components/FrontPage';
import ButtonAppBar from './Components/ButtonAppBar';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import AboutUs from './Components/AboutUs';
import Products from './Components/Products';
import Footer from './Components/Footer';

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
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/">
          <FrontPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </ThemeProvider>
);

export default App;
