import Balance from './Components/Balance/balance'
import './App.css'
import Tracker from './Components/Tracker/Tracker'
import { History } from './Components/History/History'
import AddTransaction from './Components/AddTransaction/transaction'
import { GlobalProvider } from './Context/GlobalState'

function App() {
  return (
    <div className="main">
      <div className="container">
        <GlobalProvider>  
          <h2 className='head'>Expense Tracker</h2>
          <Balance />
          <Tracker />
          <History />
          <AddTransaction />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
