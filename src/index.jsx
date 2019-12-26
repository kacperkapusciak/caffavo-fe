import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import {AuthProvider} from "./providers/AuthProvider";

import App from './App';

const app = (
  <Router basename="caffavo">
    <AuthProvider>
      <App/>
    </AuthProvider>
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));
