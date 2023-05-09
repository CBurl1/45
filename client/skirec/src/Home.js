import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';




function Home() {

    const [user, setUser] = useState('');


    useEffect(() => {
        fetch('http://localhost:5555/authorized')
          .then(response => response.json())
          .then(data => setUser(data))
          .catch(error => console.error(error));
      }, []);
    

    return (
      <div className="App">
        <header className="App-header">        
        <h1>Welcome, {user.name}!</h1>
          <p>The ski pass recommender</p>
          <body>
            <button>
              <Link to="/signup">Signup:</Link>{' '}
            </button>
            <button>
              <Link to="/login">Login:</Link>{' '}
            </button>
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

  export default Home