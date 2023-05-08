import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Account from './Account.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the ski pass recommender
        </p>
        <body>
          <p><Link to="/account">View your account:</Link></p>
          <p><button>View your recommendation:</button></p> 
          <p><button>View passes</button></p>
          <p><button>View resorts:</button></p>
        </body>
      </header>
      <Routes>
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}









