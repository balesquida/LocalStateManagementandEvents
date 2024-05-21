import React, { useState } from "react";

/*Transaction component for depositing or withdrawing funds*/
const Transaction = ({ type, handleTransaction }) => {
  /*State hook to manage input amount*/
  const [inputAmount, setInputAmount] = useState("");

  /*Function to handle input change*/
  const handleChange = (event) => {
    setInputAmount(event.target.value);
  };

  /*Function to handle form submission*/
  const handleSubmit = () => {
    if (inputAmount !== "") {
      /*If input amount is not empty, handle the transaction*/
      handleTransaction(type, parseFloat(inputAmount));
      /*Reset input amount after transaction*/
      setInputAmount("");
    }
  };

  /* Render the transaction form*/
  return (
    <div className="transaction">
      <h2>{type === "deposit" ? "Deposit" : "Withdraw"}</h2>
      <input
        type="number"
        value={inputAmount}
        onChange={handleChange}
        placeholder="Enter amount"
      />
      <button onClick={handleSubmit}>
        {type === "deposit" ? "Deposit" : "Withdraw"}
      </button>
    </div>
  );
};

export default Transaction;
