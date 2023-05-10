import React, { useState, useEffect } from 'react';

function ResortsList() {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    fetch('/skiresorts')
      .then(response => response.json())
      .then(data => setResorts(data));
  }, []);

  return (
    <header className="App-header">
    <div>
      <h2>List of Resorts</h2>
      <ul>
        {resorts.map(resort => (
          <li key={resort.id}>
            <strong>{resort.name}</strong> - {resort.location_region}, {resort.location_state}
          </li>
        ))}
      </ul>
    </div>
    </header>
  );
}

export default ResortsList;

