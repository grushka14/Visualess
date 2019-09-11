import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';

export default () => (
  <App>
    <Router>
      <div>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={HomePage} />
      </div>
    </Router>
  </App>
);
