import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Lista from './pages/Lista';


function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Cadastro" component={Cadastro} />
        <Route path="/Lista" component={Lista} />
      </Switch>
    </Router>
  );
}

export default Routes;