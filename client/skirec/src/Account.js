import React, { useState } from 'react';

function Account() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [budget, setBudget] = useState('');
  const [region, setRegion] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h1>Account Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <label>
          Budget:
          <input type="text" value={budget} onChange={(event) => setBudget(event.target.value)} />
        </label>
        <label>
          Region:
          <input type="text" value={region} onChange={(event) => setRegion(event.target.value)} />
        </label>
        <label>
          State:
          <input type="text" value={state} onChange={(event) => setState(event.target.value)} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Account;

