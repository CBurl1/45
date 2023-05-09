import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Signup({ user, setUser }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, password })
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
      })
      .catch(error => console.error(error));
  }

  if (user) {
    return <Navigate replace to="/" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Username:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Sign up</button>
    </form>
  );
}

export default Signup;
