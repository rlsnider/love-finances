import React from 'react'
import './Transactions.css'

const data = [
    { balance: "...", type: "...", amount: "...", date: "..." },
    { balance: "...", type: "...", amount: "...", date: "..." },
    { balance: "...", type: "...", amount: "...", date: "..."},
  ];

function Transactions() {
  return (
    <div className="App">
      <h2>Transaction History</h2>
      <br/>
      <br/>
      <table class='history'>
          <tr>
            <th>Balance</th>
            {/* Withdrawal or deposit */}
            <th>Type</th>
            <th>Amount</th>
            {/* I can't think of a word to put but make section for payer/payee */}
            <th>Date</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.balance}</td>
                <td>{val.type}</td>
                <td>{val.amount}</td>
                <td>{val.date}</td>
              </tr>
            )
         })}
      </table>
    </div>
  );
}
  
  export default Transactions;

//CREATE TABLE WHERE YOU CAN ADD INPUTS
//ACCOUNT, CATEGORY, DATE, PAYEE, DEPOSIT, PAYMENT, BALANCES