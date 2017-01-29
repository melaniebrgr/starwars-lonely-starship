import React, { Component } from 'react';
import 'whatwg-fetch';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      starships: [],
      starshipQuery: ""
    }
  }
  
  BASE_URL = 'https://swapi.co/api/starships/';
  STARSHIP_SEARCH_URL_GENERATOR = starship => `${this.BASE_URL}?search=${starship}`;

  updateStarshipQuery(e) {
    const query = e.target.value;
    debugger;
    this.setState({ starshipQuery: query });
  }

  handleKeyPress(e) {
    const key = e.key;
    if (key === 'Enter') this.searchForStarship(this.state.starshipQuery);
  }
  
  searchForStarship(query) {
    const URL = this.STARSHIP_SEARCH_URL_GENERATOR(query);
    fetch(URL)
      .then( response => response.json() )
      .then( responseData => this.setState({ starships: responseData.results }) );
  }

  render() {
    return (
      <div>
        <label>Search for starship:
          <input onChange={ this.updateStarshipQuery.bind(this) } onKeyPress={ this.handleKeyPress.bind(this) } type="text" placeholder={`e.g. "Death Star"`} />
        </label>
        <button onClick={ this.searchForStarship.bind(this, this.state.starshipQuery) } type="search">Search</button>
        <div>{this.state.starships.length ? this.state.starships[0].model : "No results"}</div>
      </div>
    );
  }
}