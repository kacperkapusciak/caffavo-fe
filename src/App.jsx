import React, {Suspense} from 'react';
import {Redirect, Route, Switch,} from 'react-router-dom';
import {ThemeProvider} from "styled-components";

import {withAuth} from './providers/AuthProvider';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import Login from './views/Login';
import Register from './views/Register';
import Orders from './views/Orders';
import Users from './views/Users';
import Finances from './views/Finances';
import Account from './views/Account';
import Offer from './views/Offer';

const App = ({auth}) => {
  const adminRoutes = [
    <Route path="/finances" component={Finances} key="finances"/>,
    <Route path="/users" component={Users} key="users"/>
  ];

  const userRoutes = [
    <Route path="/orders" component={Orders} key="orders"/>,
    <Route path="/account" component={Account} key="account"/>,
    <Route path="/offer" component={Offer} key="offer"/>,
    <Redirect path="/" to="/offer" key="redirectUser"/>
  ];

  const unauthorisedRoutes = [
    <Route path="/login" component={Login} key="login"/>,
    <Route path="/register" component={Register} key="register"/>,
    <Redirect path="/" to="/login" key="redirectUnauth"/>
  ];
  console.log('auth.id: ', auth.id, ' auth.admin: ', auth.admin);
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback="Loading...">
        <Switch>
          {auth.id && auth.admin ? (
            [...adminRoutes, ...userRoutes]
          ) : auth.id ? (
            userRoutes
          ) : (
            unauthorisedRoutes
          )}
        </Switch>
      </Suspense>
      <GlobalStyle/>
    </ThemeProvider>
  );
};

export default withAuth(App);
