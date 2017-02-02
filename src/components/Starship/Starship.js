import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

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
          <Card>
            <CardTitle title={selectedShip.name} subtitle={selectedShip.model} />
            <CardText>
              <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn>Class</TableHeaderColumn>
                    <TableHeaderColumn>Crew Size</TableHeaderColumn>
                    <TableHeaderColumn>Hyperdrive rating</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn>{selectedShip.starship_class}</TableRowColumn>
                    <TableRowColumn>{selectedShip.crew}</TableRowColumn>
                    <TableRowColumn>{selectedShip.hyperdrive_rating}</TableRowColumn>
                  </TableRow>      
                </TableBody>
              </Table>            
            </CardText>
          </Card>
        </main>
      );
    }
    return html;
  }
}

Starship.propTypes = {
  params: React.PropTypes.shape({
    name: PropTypes.string
  }),
  starships: PropTypes.arrayOf(PropTypes.object),
  searchForStarship: PropTypes.func,
  updateStarships: PropTypes.func
}