import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './containers/App/App';
import Home from './components/Home/Home';
import Starship from './components/Starship/Starship';

ReactDOM.render((
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="starship/:name" component={Starship} />
      </Route>
    </Router>
  </MuiThemeProvider>
),
  document.getElementById('root')
);
