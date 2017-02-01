import React, { Component, PropTypes } from 'react';

import List from '../List/List';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      starshipQuery: ""
    }
  }

  updateStarshipQuery(e) {
    const query = e.target.value;
    this.setState({ starshipQuery: query });
  }

  handleEnterKeyPress(e) {
    const key = e.key;
    if (key === 'Enter') this.props.searchForStarship(this.state.starshipQuery);
  }

  displayQueryResponse(starships) {
    const isStarships = starships.length > 0;
    return isStarships ? <List starships={starships} /> : <p>{`Sorry, no results found for "${this.state.starshipQuery}"`}</p>;
  }

  render() {
    return (
      <div>
        <label>Search for starship:&nbsp;
          <input onChange={ this.updateStarshipQuery.bind(this) } onKeyPress={ this.handleEnterKeyPress.bind(this) } type="text" placeholder={`e.g. "Death Star"`} />
        </label>
        <button onClick={ () => this.props.searchForStarship(this.state.starshipQuery) } type="search">Search</button>
        <h3>Search results:</h3>
        {this.props.starships ? this.displayQueryResponse(this.props.starships) : <p>Nothing here yet...</p>}
      </div>
    );
  }
}

Search.propTypes = {
  searchForStarship: PropTypes.func,
  starships: PropTypes.arrayOf(PropTypes.object)
}