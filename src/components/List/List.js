import React from 'react';

export default function({ starships }) {
  return (
    <ul>
      {starships.map( starship => <li>{starship.name}</li> )}
    </ul>
  );
}