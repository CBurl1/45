import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';

const ResortUsers = () => {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    fetch('/skiresorts')
      .then(response => response.json())
      .then(data => setResorts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Container>
      <h2 className="text-center">Resort Users</h2>
      <Row className="justify-content-center">
        {resorts.map(resort => (
          <Col md={4} key={resort.id}>
            <div className="resort-card text-center">
              <div className="image-container">
                <Image src={resort.image} alt={resort.name} fluid />
              </div>
              <h3 className="mt-3">{resort.name}</h3>
              <ListGroup>
                {resort.users.map(user => (
                  <ListGroup.Item key={user.id}>{user.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResortUsers;






