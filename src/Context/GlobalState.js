import React, { createContext, useReducer } from 'react';
import AppReducer from '../Recuder/AppReducer'

const initialState = {

  
    transactions : []
    
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function addTransaction(Transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: Transaction           
        });
    }


    return (<GlobalContext.Provider
        value={{
            transactions: state.transactions,
            addTransaction
        }}
    >
        {children}
    </GlobalContext.Provider>);

}

