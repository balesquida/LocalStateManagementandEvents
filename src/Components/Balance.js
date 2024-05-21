import React from 'react';

/* Balance component to display the current balance*/
const Balance = ({ balance }) => {
  return (
    <div className="balance">
      {/* Heading for current balance */}
      <h2>Current Balance:</h2> 
      {/* Display the balance formatted as currency */}
      <p>£{balance.toFixed(2)}</p>
    </div>
  );
};

export default Balance;
