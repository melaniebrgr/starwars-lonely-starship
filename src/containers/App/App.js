import React, { Component } from 'react';

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
    fetch(URL)
      .then( response => response.json() )
      .then( responseData => this.setState({ starships: responseData.results }) );
  }

  // renderChildrenWithProps() {
  //   return React.Children.map(this.props.children,
  //     child => React.cloneElement(child, {
  //       starships: this.state.starships
  //     })
  //   );
  // }  

  render() {
    return (
      <div>
        <h1>A Guide to the Starships of Star Wars</h1>
        <Search
          searchForStarship={this.searchForStarship.bind(this)}
          starships={this.state.starships}
        />
        {this.props.children}
      </div>
    );
  }
}