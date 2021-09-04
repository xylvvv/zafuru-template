import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from './pages/welcome';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Welcome} />
    </Switch>
  </BrowserRouter>
);

export default App;
