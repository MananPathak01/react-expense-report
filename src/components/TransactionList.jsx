import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../configure'
const TransactionList = () => {
  const transactions = useSelector(state=>state)
  const dispatch = useDispatch()
  return (
    <div>
         <h3>History</h3>
          {transactions.length >0 ? < ul id="list" className="list">
            {transactions.map((transaction)=>(
              <li key = {transaction.id} className={transaction.amount < 0 ? 'minus': 'plus'}>
              {transaction.text} <span>{transaction.amount < 0 ? '-': '+'}${Math.abs(transaction.amount)}</span>
              <button className="delete-btn" onClick={()=>{dispatch(actions.deleteTransaction(transaction.id))}}>Delete</button>
              </li> 
        ))}
      </ul>:  <p>No transactions yet</p>
}
    </div>
  )
}

export default TransactionList