import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './context/user';

function Home() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    fetch('/authorized')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch user');
        }
      })
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        console.error(error);
        setUser(null); // Set user to null if there was an error
      });
  }, []);
  

  function handleLogout() {
    console.log('logging out...');
    fetch('/logout', { method: 'DELETE' })
      .then(() => {
        console.log('logged out successfully');
        setUser(null);
      })
      .catch(error => console.error(error));
  }

  console.log('user:', user);

  if (user) {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Welcome, {user.name}!</h1>
        <strong>Comment on the state of terrain parks and let other users know about changes that the park crew has made</strong>
        <body>
          <br></br>
          <button>
            <Link to="/comment-creator">Make a Comment:</Link>{' '}
          </button>
          <br></br>
          <button>
            <Link to="/your-comments">View Your Comments:</Link>{' '}
          </button>
          <br></br>
          <button>
            <Link to="/resortusers">View who is commenting on each resort:</Link>{' '}
          </button>
          <br></br>
          <button onClick={handleLogout}>Logout</button>
        </body>
      </header>
    </div>
  );
  } else {
    return (
            <div>
        <header className="App-header">
          <h1>Terrain Park Info!</h1>
          <button>
            <Link to="/signup">Signup:</Link>{' '}
          </button>
          <button>
            <Link to="/login">Login:</Link>{' '}
          </button>
        </header>
      </div>
    );
  }
}

export default Home;
