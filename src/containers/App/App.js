import React, { Component } from 'react';

import Search from '../../components/Search/Search';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>A Guide to the Starships of Star Wars</h1>
        <Search />
        {this.props.children}
      </div>
    );
  }
}