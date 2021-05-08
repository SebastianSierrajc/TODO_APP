import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <h1>Hello, World</h1>
      </Route>
    </Switch>
  </Router>
)

export default App;
