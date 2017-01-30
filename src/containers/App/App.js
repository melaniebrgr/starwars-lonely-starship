import React, { Component } from 'react';
import { Link } from 'react-router';

import 'whatwg-fetch';

import Search from '../../components/Search/Search';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      starships: null
    }
  }
  
  BASE_URL = 'https://swapi.co/api/starships/';
  STARSHIP_SEARCH_URL_GENERATOR = starship => `${this.BASE_URL}?search=${starship}`;
  
  searchForStarship(query) {
    const URL = this.STARSHIP_SEARCH_URL_GENERATOR(query);
    let response = fetch(URL).then( response => response.json() );
    response.then( responseData => this.setState({ starships: responseData.results }) );
    return response;
  }

  updateStarships(starships) {
    this.setState({ starships: starships });
  }

  renderChildrenWithProps({ starships }) {
    return React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        starships: starships,
        searchForStarship: this.searchForStarship.bind(this),
        updateStarships: this.updateStarships.bind(this)
      })
    );
  }  

  render() {
    return (
      <div>
        <nav><Link to="/">Home</Link></nav>
        <h1>A Guide to the Starships of Star Wars</h1>
        <Search
          searchForStarship={this.searchForStarship.bind(this)}
          starships={this.state.starships}
        />
        {this.renderChildrenWithProps(this.state)}
      </div>
    );
  }
}