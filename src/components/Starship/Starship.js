import React, { Component, PropTypes } from 'react';

export default class Starship extends Component { 
  constructor() {
    super();
  }

  componentDidMount() {
    if (!this.props.starships) {
      this.props.searchForStarship(this.props.params.name)
        .then( response => this.props.updateStarships(response.results));
    }
  }

  render() {
    let html = <main></main>;
    if (this.props.starships) {
      let selectedShip = this.props.starships.find( starship => starship.name === this.props.params.name );
      html = (
        <main>
          <h2>Starship Details</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Crew Size</th>
                <th>Model</th>
                <th>Hyperdrive rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{selectedShip.name}</th>
                <th>{selectedShip.crew}</th>
                <th>{selectedShip.model}</th>
                <th>{selectedShip.hyperdrive_rating}</th>
              </tr>        
            </tbody>
          </table>
        </main>
      );
    }
    return html;
  }
}