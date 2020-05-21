import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { renderRoutes } from 'react-router-config';
import { Router } from 'react-router-dom';
import routes from './routes';
import history from './history';

ReactDOM.render(
  <Router history={history}>
    {renderRoutes(routes)}
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
