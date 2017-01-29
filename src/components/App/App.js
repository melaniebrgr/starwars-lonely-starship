import React, { Component } from 'react';

import Search from '../Search/Search';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Search />
      </div>
    );
  }
}