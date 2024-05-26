import { configureStore, createSlice } from "@reduxjs/toolkit";
import AddTransaction from "../components/AddTransaction";

const transactionSlice = createSlice({
    name:"transaction",
    initialState:[
        { id: 1, text: 'Eg: Salary', amount: 30 },
        { id: 2, text: 'Eg: Food', amount: -30 },
  ], reducers:{
    AddTransaction: (state, action) => {
        state.push(action.payload)
    },
    deleteTransaction: (state, action) => {
      return state.filter(transaction => transaction.id !== action.payload)
    }
  }
})

const store = configureStore({
    reducer: transactionSlice.reducer
})
export const actions = transactionSlice.actions

export default store;