import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home({ user, setUser }) {

  useEffect(() => {
    fetch('/authorized')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
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

  if (!user) {
    return (
      <div>
        <header className="App-header">
          <h1>Welcome to the Ski Pass Recommender !</h1>
          <button>
            <Link to="/signup">Signup:</Link>{' '}
          </button>
          <button>
            <Link to="/login">Login:</Link>{' '}
          </button>
        </header>
        {user === null && <p>You have been logged out</p>}
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome, {user.name} !</h1>
          <p>The ski pass recommender</p>
          <body>
            <br></br>
            <button>
              <Link to="/recommendation">Make a recommendation:</Link>{' '}
            </button>
            <br></br>
            <button>
              <Link to="/passes">View passes:</Link>{' '}
            </button>
            <br></br>
            <button>
              <Link to="/resorts">View resorts:</Link>{' '}
            </button>
            <br></br>
            <button onClick={handleLogout}>Logout</button>
          </body>
        </header>
      </div>
    );
  }
}

export default Home;
