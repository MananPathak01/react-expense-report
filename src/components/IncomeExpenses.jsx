import React from 'react'
import { useSelector } from 'react-redux'

const IncomeExpenses = () => {
  const transactions = useSelector(state=>state)
  const income  = transactions.reduce((acc, transaction) => {
    if (transaction.amount>0){
        return acc+=transaction.amount
    }
    return acc
  },0)

  const expenses  = transactions.reduce((acc, transaction) => {
    if (transaction.amount<0){
        return acc-=transaction.amount
    }
    return acc
  },0)
  
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${income.toFixed(2)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expenses.toFixed(2)}</p>
        </div>
      </div>
  )
}

export default IncomeExpenses