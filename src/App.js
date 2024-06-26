import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header'
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import {Provider} from "react-redux"
import store from './configure';

function App() {
  return (
    <Provider store = {store}>
      <Header/>
      <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
      </div>
    </Provider>
  );
}

export default App;
