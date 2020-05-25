import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
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

serviceWorker.unregister();
