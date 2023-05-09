import { Link } from 'react-router-dom';

function Home({ username }) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome, {username}!</h1>
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