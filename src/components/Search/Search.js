import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
      <div style={{ marginTop: 24, marginBottom: 24 }}>
        <TextField 
          hintText="Search for starship" 
          onChange={ this.updateStarshipQuery.bind(this) }
          onKeyPress={ this.handleEnterKeyPress.bind(this) }
        />        
        <RaisedButton 
          onClick={ () => this.props.searchForStarship(this.state.starshipQuery) } 
          label="Search" 
          style={{ margin: 12 }}
        />
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