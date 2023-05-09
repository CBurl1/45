import { Link } from 'react-router-dom';
import React from 'react';

function Home({ user }) {
    if (user){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, {user.name} !</h1>
        <p>The ski pass recommender</p>
        <body>
          <br></br>
          <button>
            <Link to="/account">View your account:</Link>{' '}
          </button>
          <br></br>
          <button>
            <Link to="/your-recommendation">View your recommendation:</Link>{' '}
          </button>
          <br></br>
          <button>
            <Link to="/passes">View passes:</Link>{' '}
          </button>
          <br></br>
          <button>
            <Link to="/resorts">View resorts:</Link>{' '}
          </button>
        </body>
      </header>
    </div>
  );
}
    else {
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
      </div>
  );

    }
}
export default Home;
