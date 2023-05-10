import React, { useState, useEffect } from 'react';

function ResortsList() {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/skiresorts')
      .then(response => response.json())
      .then(data => setResorts(data));
  }, []);

  return (
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
  );
}

export default ResortsList;

