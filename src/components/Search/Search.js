import React, { Component } from 'react';
import 'whatwg-fetch';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      starships: []
    }
  }
  
  URL = 'http://swapi.co/api/starships/';

  componentDidMount() {
    fetch(this.URL)
      .then( response => response.json() )
      .then( responseData => this.setState({ starships: responseData.results }) );
  }

  render() {
    return (
      <div>
        <label>Search for starships:
          <input type="text" placeholder={`Enter starship here, e.g. "Death Star"`} />
        </label>
        <button onClick={ () => console.log('clicked') } type="search">Search</button>
      </div>
    );
  }
}