// Some ES6 functionality can't be transpiled without polyfill, only import the functionality you need!
import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

// You won't need this if you're gonna use SASS/LESS
import './styles/styles.css'; // Webpack imports CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
