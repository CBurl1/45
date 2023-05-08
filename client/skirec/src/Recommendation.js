import React from 'react';

function Recommendation(props) {
  const { recommendation } = props;

  return (
    <div>
      <h2>Your Recommendation</h2>
      <p>{recommendation}</p>
    </div>
  );
}

export default Recommendation;
