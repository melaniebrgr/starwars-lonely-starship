import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App/App';

const Home = () => {
  return (
    <h1>Home</h1>
  );
}

const Starships = () => {
  return (
    <h1>Starships</h1>
  );
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="Starships" component={Starships} />
    </Route>
  </Router>
),
  document.getElementById('root')
);
