import React, { useState } from 'react';

function Resorts() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <h1>Resorts</h1>
      <form>
        <label>
          Search:
          <input type="text" value={searchText} onChange={handleSearchChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      <p>Results for: {searchText}</p>
      {/* Display search results */}
    </div>
  );
}

export default Resorts;
