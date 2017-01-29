import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App/App';
import Home from './components/Home/Home';
import Starship from './components/Starship/Starship';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="starship" component={Starship} />
    </Route>
  </Router>
),
  document.getElementById('root')
);
