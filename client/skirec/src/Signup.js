import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === '') {
      setError('Name cannot be empty');
      return;
    }

    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, password })
    })
      .then(response => {
        if (response.ok) {
          setRedirect(true);
        } else {
          setError('Sign up failed');
        }
      })
      .catch(error => console.error(error));
  }

  if (redirect) {
    return <Navigate replace to="/" />;
  }

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" type="submit" block>Sign up</Button>
        </Form>
      </div>
    </Container>
  );
}

export default Signup;
