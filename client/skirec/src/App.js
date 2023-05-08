import './App.css';
import Account from './Account.js';
import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the ski pass recommender
        </p>
        <body>
          <p> <Link to="/account">View your account:</Link> </p>
          <p> <button>View your recommendation:</button> </p> 
          <p> <button>View passes</button> </p>
          <p><button>View resorts:</button> </p>
        </body>
      </header>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;








