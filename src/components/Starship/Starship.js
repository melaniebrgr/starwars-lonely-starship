import React from 'react';

export default function Starship(props) {
  console.log(props);
  return (
    <main>
      <h2>Starship Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Hyperdrive rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Hyperdrive rate</th>
          </tr>        
        </tbody>
      </table>
    </main>
  );
}