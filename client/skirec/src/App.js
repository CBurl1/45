import './App.css';
import Signup from './Signup.js';
import Login from './Login.js';
import Resorts from './Resorts.js';
import Passes from './Passes.js';
import Recommendation from './Recommendation.js';
import Home from './Home.js'
import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/user';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserProvider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recommendation" element={<Recommendation />} />
          <Route path="/passes" element={<Passes />} />
          <Route path="/resorts" element={<Resorts />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;


