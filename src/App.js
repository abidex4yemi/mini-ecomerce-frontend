import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Products from './pages/Products/Products';
import AddProduct from './pages/Products/AddProduct';
import Header from './components/molecules/Header';
import Signup from './pages/Signup';
import { Login } from './pages/Login';
import { GlobalStyles } from './components/atom';
import requiresAuth from './components/HOC/requireAuth';

const App = () => {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Products} />
        <Route exact path="/add-product" component={requiresAuth(AddProduct)} />
      </Switch>
    </>
  );
};

export default App;
