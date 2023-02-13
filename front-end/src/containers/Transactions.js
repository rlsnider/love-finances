import {useSelector} from 'react-redux'

function Transactions() {
    const {user} =useSelector((state) => state.auth)
  return (
  <>
  <div>
    <h1> Welcome {user && user.name}</h1>
    <p>Start each account with a category of Account Balance.<br/>Example:Account:Matthew's Savings Category: Opening Balance Date: 2/12/2023 <br/>Payee: opening Balance Deposit: 500 Account Total 500</p>
  </div>
  <div>
   <table>
    <tr>
        <th>Account</th>
            <td>{}</td>
        <th>Category</th>
            <td></td>
        <th>Date</th>
            <td></td>
        <th>Payee</th>
            <td></td>
        <th>Payment</th>
            <td></td>
        <th>Deposit</th>
            <td></td>
        <th>Account Balance</th>
            <td></td>
        <th>Total</th>
            <td></td>
    </tr>
   </table>
  </div>
  </>
    
  )
}

export default Transactions