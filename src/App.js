import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import FrontPage from './Components/FrontPage';
import ButtonAppBar from './Components/ButtonAppBar';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import ListOfProducts from './Components/ListOfProducts';
import Product from './Components/Product';

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
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route exact path="/products">
          <ListOfProducts />
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
