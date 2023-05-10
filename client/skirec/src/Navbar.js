import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <button>
          <Link to="/">Home</Link>
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;