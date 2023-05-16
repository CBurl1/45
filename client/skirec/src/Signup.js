import React, { useState } from 'react';
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
          window.alert('Sign up failed');
        }
      })
      .catch(error => console.error(error));
  }

  if (redirect) {
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
    </div>
  );
}

export default Signup;