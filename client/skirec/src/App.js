import './App.css';
import Signup from './Signup.js';
import Login from './Login.js';
import Account from './Account.js';
import Resorts from './Resorts.js';
import Passes from './Passes.js';
import Recommendation from './Recommendation.js';
import Home from './Home.js'
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [username, setUsername] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home username={username} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/passes" element={<Passes />} />
        <Route path="/your-recommendation" element={<Recommendation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


