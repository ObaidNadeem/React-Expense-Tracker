import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalState'
import './transaction.css'

function Transaction (){

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    console.log(text,amount)
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
    
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000000),
            text,
            amount: parseInt(amount)
        }
    
    
        addTransaction(newTransaction);
        
        setText('')
        setAmount(0)
    
    }

    

    return (
        <div>
            <h2>Add new Transaction</h2>
            <form onSubmit={ (e) => onSubmit(e)}>
                <div>
                    <h3>Text</h3>
                    <input value={text} onChange={(e)=> setText(e.target.value)} type="text" placeholder="Enter Text" />
                </div>
                <div>
                    <h3>Amount</h3>
                    <p>Enter amount with a negative(-) sign for expense and with positive(+) sign for income</p>
                    <input value={amount} onChange={(e)=> setAmount(e.target.value)} type="number" placeholder="Enter amout" />
                </div>
                <button onClick={onSubmit} className='button'>Add Transaction</button>
            </form>
        </div>
    )
}

export default Transaction;