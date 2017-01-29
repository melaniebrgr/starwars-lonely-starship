import React, { Component } from 'react';

import List from '../List/List';

import 'whatwg-fetch';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      starships: null,
      starshipQuery: ""
    }
  }
  
  BASE_URL = 'https://swapi.co/api/starships/';
  STARSHIP_SEARCH_URL_GENERATOR = starship => `${this.BASE_URL}?search=${starship}`;

  updateStarshipQuery(e) {
    const query = e.target.value;
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

  displayQueryResponce(starships) {
    const isStarships = starships.length > 0;
    return isStarships ? <List starships={this.state.starships} /> : <p>{`Sorry, no results found for "${this.state.starshipQuery}"`}</p>;
  }

  render() {
    return (
      <div>
        <label>Search for starship:&nbsp;
          <input onChange={ this.updateStarshipQuery.bind(this) } onKeyPress={ this.handleKeyPress.bind(this) } type="text" placeholder={`e.g. "Death Star"`} />
        </label>
        <button onClick={ this.searchForStarship.bind(this, this.state.starshipQuery) } type="search">Search</button>
        <h3>Search results:</h3>
        {this.state.starships ? this.displayQueryResponce(this.state.starships) : <p>Nothing here yet...</p>}
      </div>
    );
  }
}