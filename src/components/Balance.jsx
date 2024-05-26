import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
  const transactions = useSelector(state=> state)
  const balance = transactions.reduce((acc, transaction)=> acc+transaction.amount,0);
  return (
    <div>
        <h4>Your Balance</h4>
        <h1 id="balance">${balance.toFixed(2)}</h1>
    </div>
  )
}

export default Balance