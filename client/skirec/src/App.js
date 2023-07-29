import Signup from './Signup.js';
import Login from './Login.js';
import Home from './Home.js';
import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/user';
import Navbar from './Navbar.js';
import GameRooms from './GameRooms.js';
import Stats from './Stats.js';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserProvider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/gamerooms" element={<GameRooms />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;



