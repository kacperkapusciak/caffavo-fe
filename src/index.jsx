import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import ReactNotification from 'react-notifications-component';

import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import { AuthProvider } from "./providers/AuthProvider";

import App from './App';

const app = (
  <Router
    basename="caffavo-fe"
    hashType="slash"
  >
    <AuthProvider>
      <App/>
      <ReactNotification/>
    </AuthProvider>
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));
