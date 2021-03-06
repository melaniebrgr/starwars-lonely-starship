import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Divider from 'material-ui/Divider';
import { white } from 'material-ui/styles/colors';
import 'whatwg-fetch';
import './App.css';

import Search from '../../components/Search/Search';

const tabStyles = {
  fontSize: 18,
  paddingTop: 8,
  fontWeight: 400,
};

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
      <div className="mui-container-fluid">
        <AppBar
          title="A Guide to the Starships of Star Wars"
          iconElementLeft={<Link to="/"><IconButton><ActionHome color={ white } /></IconButton></Link>}
        />
        <Search
          searchForStarship={this.searchForStarship.bind(this)}
          starships={this.state.starships}
        />
        <Divider />
        {this.renderChildrenWithProps(this.state)}
      </div>
    );
  }
}