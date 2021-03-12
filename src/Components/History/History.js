import React, { useContext } from 'react'
import './history.css'
import { GlobalContext} from '../../Context/GlobalState'
import { Transaction } from './transaction';

export const History = () => {
    
    const { transactions } = useContext(GlobalContext);

    console.log(transactions)
     
    return (
        <div>
            <h2>History</h2>
            <ul id="list">
                {transactions.map(transaction => ( <Transaction key={transaction.id} transaction={ transaction } />  ))}
               
            </ul>
        </div>
    )
}
