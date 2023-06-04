import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <Switch >

    <Route path="/" exact="{true}">
      <Dashboard></Dashboard>

    </Route>
    <Route path="/login">
      <Login />

    </Route>
    <Route path="*">

      <Error />
    </Route>
      </ Switch>
    </Router>
  );
}

export default App;
