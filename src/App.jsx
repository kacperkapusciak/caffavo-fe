import React, { Suspense } from 'react';
import { Redirect, Route, Switch, } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";

import { withAuth } from 'providers/AuthProvider';

import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';

import Navigation from 'components/Navigation';

import Login from 'views/Login';
import Register from 'views/Register';
import Orders from 'views/Orders';
import Users from 'views/Users';
import Finances from 'views/Finances';
import Account from 'views/Account';
import Offer from 'views/Offer';
import Ingredients from 'views/Ingredients';
import Recepies from 'views/Recepies';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 256px 1fr;
`;

const App = ({ auth }) => {
  const adminRoutes = [
    <Route path="/finances" component={Finances} key="finances"/>,
    <Route path="/users" component={Users} key="users"/>,
    <Route path="/ingredients" component={Ingredients} key="ingredients"/>,
    <Route path="/recepies" component={Recepies} key="recepies"/>
  ];

  const userRoutes = [
    <Route path="/orders" component={Orders} key="orders"/>,
    <Route path="/orders/:id" component={Orders} key="orders-id"/>,
    <Route path="/account" component={Account} key="account"/>,
    <Route path="/offer" component={Offer} key="offer"/>,
    <Redirect path="/" to="/offer" key="redirectUser"/>
  ];

  const unauthorisedRoutes = [
    <Route path="/login" component={Login} key="login"/>,
    <Route path="/register" component={Register} key="register"/>,
    <Redirect path="/" to="/login" key="redirectUnauth"/>
  ];

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback="Loading...">
        <Switch>
          {auth.id ? (
            <Layout>
              <Navigation/>
              {auth.admin ? [...adminRoutes, ...userRoutes] : userRoutes}
            </Layout>
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
