import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App/App';

const Home = () => {
  return (
    <h1>Star Wars Starship Homepage</h1>
  );
}

const Starship = () => {
  return (
    <h1>Starship</h1>
  );
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="Starship" component={Starship} />
    </Route>
  </Router>
),
  document.getElementById('root')
);
