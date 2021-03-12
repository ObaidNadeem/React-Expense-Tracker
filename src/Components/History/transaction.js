import React from 'react'
import './history.css'

export const Transaction = ({ transaction }) => {
    
    const sign = transaction.amount < 0 ? '-' : '+';
    
    return (
        <li className= { transaction.amount < 0 ? 'minus' : 'plus' }>
            {transaction.text} <span>{sign}$</span> <span>{Math.abs(transaction.amount)}</span>
        </li>
    )
}
