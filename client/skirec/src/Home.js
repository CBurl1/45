import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './context/user';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

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
        setUser(null);
      });
  },);

  function handleLogout() {
    console.log('logging out...');
    fetch('/logout', { method: 'DELETE' })
      .then(() => {
        console.log('logged out successfully');
        setUser(null);
      })
      .catch(error => console.error(error));
  }

  return (
    <Container className="App">
      <header className="App-header">
        {user && (
          <>
            <h1 className="welcome-message">Welcome, {user.name}</h1>
            <strong className="description">
              Let the cards begin!
            </strong>
          </>
        )}

        <Row className="button-row">
          <Col>
            {user ? (
              <Button variant="primary" className="my-2 btn-custom" onClick={handleLogout}>
                <span className="logout-text">Logout</span>
              </Button>
            ) : (
              <div>
                <Button variant="primary" className="my-2 btn-custom">
                  <Link to="/signup" className="text-link">
                    Signup
                  </Link>
                </Button>
                <Button variant="primary" className="my-2 btn-custom">
                  <Link to="/login" className="text-link">
                    Login
                  </Link>
                </Button>
              </div>
            )}
          </Col>
        </Row>

        <hr />

        <h2>45</h2>

      </header>
    </Container>
  );
}

export default Home;

