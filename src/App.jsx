import React, { Suspense } from 'react';
import { Redirect, Route, Switch, } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";

import { withAuth } from 'providers/AuthProvider';

import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';

import Navigation from 'components/Navigation';

const Login = React.lazy(() => import('views/Login'));
const Register = React.lazy(() => import('views/Register'));
const Orders = React.lazy(() => import('views/Orders'));
const Order = React.lazy(() => import('views/Order'));
const Users = React.lazy(() => import('views/Users'));
const Finances = React.lazy(() => import('views/Finances'));
const Account = React.lazy(() => import('views/Account'));
const Offer = React.lazy(() => import('views/Offer'));
const Ingredients = React.lazy(() => import('views/Ingredients'));
const Recepies = React.lazy(() => import('views/Recepies'));

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
    <Route path="/orders" exact component={Orders} key="orders"/>,
    <Route path="/orders/:id" component={Order} key="orders-id"/>,
    <Route path="/account" component={Account} key="account"/>,
    <Route path="/offer" component={Offer} key="offer"/>
  ];

  const unauthorisedRoutes = [
    <Route path="/login" component={Login} key="login"/>,
    <Route path="/register" component={Register} key="register"/>
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
