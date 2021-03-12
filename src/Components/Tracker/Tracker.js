import React, {useContext} from 'react'
import './tracker.css'
import { GlobalContext } from '../../Context/GlobalState'

function Tracker(){

    const {transactions} = useContext(GlobalContext)

    const amount = transactions.map(transaction => transaction.amount);


    const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

    const expense = (amount.filter(item => item < 0).reduce((acc, item) => (acc += item), 0 ) * -1).toFixed(2);

    return (
        <div className='ce'>
            <div className="mainT">

            <div>
                <h3> Income </h3>
                <p> {income}$ </p>
            </div>


            <div>
                <h3> Expense </h3>
                <p> {expense}$ </p>
            </div>
            </div>
        </div>
    )
}

export default Tracker