import './App.css';
import Authentication from './Authentication.js';
import Account from './Account.js';
import Resorts from './Resorts.js';
import Passes from './Passes.js';
import Recommendation from './Recommendation.js'
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
          <p> <Link to="/authentication">Authentication:</Link> </p>
          <p> <Link to="/account">View your account:</Link> </p>
          <p> <Link to="/your-recommendation">View your recommendation:</Link> </p>
          <p> <Link to="/passes">View passes:</Link> </p>
          <p> <Link to="/resorts">View resorts:</Link> </p>
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
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/account" element={<Account />} />
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/passes" element={<Passes />} />
        <Route path="/your-recommendation" element={<Recommendation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;








