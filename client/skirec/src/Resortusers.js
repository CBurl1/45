import React, { useState, useEffect } from 'react';

const ResortUsers = () => {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    // Fetch resorts data from the backend API
    fetch('/skiresorts')
      .then(response => response.json())
      .then(data => setResorts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {resorts.map(resort => (
        <div key={resort.id}>
          <h3>{resort.name}</h3>
          <ul>
            {resort.users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResortUsers;

