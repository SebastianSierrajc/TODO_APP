import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Sinup from '../containers/Singup';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/singup'>
          <Sinup />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default App;
