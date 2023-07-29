import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './context/user';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Home() {
  const { user, setUser } = useContext(UserContext);
  const [resorts, setResorts] = useState([]);

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

    fetch('/skiresorts')
      .then(response => response.json())
      .then(data => setResorts(data))
      .catch(error => console.log(error));
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
              <Button variant="primary" className="my-2 btn-custom">
                <Link to="/feed" className="text-link">
                  See the Feed
                </Link>
              </Button>
            ) : null}
          </Col>
          <Col>
            {user ? (
              <Button variant="primary" className="my-2 btn-custom">
                <Link to="/comment-creator" className="text-link">
                  Make a Comment
                </Link>
              </Button>
            ) : null}
          </Col>
          <Col>
            {user ? (
              <Button variant="primary" className="my-2 btn-custom">
                <Link to="/your-comments" className="text-link">
                  View Your Comments
                </Link>
              </Button>
            ) : null}
          </Col>
          <Col>
            {user ? (
              <Button variant="primary" className="my-2 btn-custom">
                <Link to="/resortusers" className="text-link">
                  View who is commenting on each resort
                </Link>
              </Button>
            ) : null}
          </Col>
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

        <h2 style={{ fontSize: '50px', fontWeight: 'bold', marginTop: '50px', marginBottom: '50px' }}>45</h2>

      </header>
    </Container>
  );
}

export default Home;

