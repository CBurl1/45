import './App.css';
import Signup from './Signup.js';
import Login from './Login.js';
import Account from './Account.js';
import Resorts from './Resorts.js';
import Passes from './Passes.js';
import Recommendation from './Recommendation.js';
import Home from './Home.js'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:5555/authorized')
  //     .then(response => response.json())
  //     .then(data => setUser(data))
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
        <Route path="/account" element={<Account/>} />
        <Route path="/your-recommendation" element={<Recommendation />} />
        <Route path="/passes" element={<Passes user />} />
        <Route path="/resorts" element={<Resorts user/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

