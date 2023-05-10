import './App.css';
import Signup from './Signup.js';
import Login from './Login.js';
import Resorts from './Resorts.js';
import Passes from './Passes.js';
import Recommendation from './Recommendation.js';
import Home from './Home.js'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/passes" element={<Passes user />} />
        <Route path="/resorts" element={<Resorts user/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

