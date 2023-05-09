import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:5555/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          // Set the username state in the App component
          props.setUsername(name);

          // Navigate to the home page
          navigate('/');
        }
      })
      .catch(error => console.error(error));
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Log in</button>
    </form>
  );
}
export default Login;
