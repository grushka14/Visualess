import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './constants/routes';
import App from './containers/App';
import ServiceChoice from './components/ServiceChoice';

export default () => (
  <App>
    <Router>
      <div>
        <Route path={routes.ServiceChoice} component={ServiceChoice} />
      </div>
    </Router>
  </App>
);
