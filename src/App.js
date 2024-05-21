import React, { useState } from 'react';
import Balance from './Components/Balance';
import Transaction from './Components/Transaction';
import './App.css';

/*Main component for the banking application*/
const App = () => {
  /*State hook to manage the balance*/
  const [balance, setBalance] = useState(0);

    /*Function to handle transactions*/
  const handleTransaction = (type, amount) => {
    if (type === 'deposit') {
      setBalance(balance + amount);
    } else {
      if (balance >= amount) {
        setBalance(balance - amount);
      } else {
        alert('Insufficient funds!');
      }
    }
  };
   /*Function to add interest to the balance*/
  const addInterest = (rate) => {
    setBalance(balance + balance * (rate / 100));
  };

     /*Function to charge fees from the balance*/
  const chargeFees = (fee) => {
    setBalance(balance - fee);
  };

     /*Render the application*/
  return (
    <div className="App">
      <h1><span className="title">Banking Application</span></h1>
      <Balance balance={balance} />
      <Transaction type="deposit" handleTransaction={handleTransaction} />
      <Transaction type="withdraw" handleTransaction={handleTransaction} />
      <button onClick={() => addInterest(2.5)}>Add Interest (2.5%)</button>
      <button onClick={() => chargeFees(30)}>Charge Bank Fees (£30)</button>
    </div>
  );
};

export default App;
