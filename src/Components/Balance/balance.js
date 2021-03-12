import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalState'
import './balance.css'

export const Balance = () => {
    
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    // console.log(transaction.amount)
    return (
        <div>
            <h2 >Current Balance</h2>
            <h2 className={total > 0 ? 'green' : 'red'}>{total}$</h2>
        </div>

    )
}

export default Balance