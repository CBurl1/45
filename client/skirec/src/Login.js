import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Login({ user, setUser }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:5555/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password })
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            const { id, name, email } = data;
            setUser({ id, name, email });
          });
        } else {
          console.log('Invalid Username or Password - Please Try Again');
        }
      });
  }

  if (user) {
    return <Navigate replace to="/" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;


