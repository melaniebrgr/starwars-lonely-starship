import React from 'react';
import { Link } from 'react-router';

export default function({ starships }) {
  return (
    <ul>
      {starships.map( (starship, index) => <li key={index}><Link to={`starship/${starship.name}`}>{starship.name}</Link></li> )}
    </ul>
  );
}