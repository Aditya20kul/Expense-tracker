import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';
import axios from 'axios'
//Initial State 
const initialState = {
    transactions: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState)

//Provider Components
export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getTransactions(){
        try {
            const res = await axios.get('https://track-exp.herokuapp.com/api/v1/transactions')
            console.log(res.data)
            dispatch({
                type: 'GET_TRANSACTION',
                payload: res.data.data
            });
        } catch (error) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: error.response.data.error
            });
        }
    }

    async function deleteTransaction(id){
        try {
            await axios.delete(`https://track-exp.herokuapp.com/api/v1/transactions/${id}`)
        } catch (error) {
            
        }

        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    async function addTransaction(data){
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
      
          try {
            const res = await axios.post('https://track-exp.herokuapp.com/api/v1/transactions', data, config);
            dispatch({
              type: 'ADD_TRANSACTION',
              payload: res.data.data
            });
          } catch (err) {
            dispatch({
              type: 'TRANSACTION_ERROR',
              payload: err.response.data.error
            });
          }
    }



    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions,

    }}>
        {children}
    </GlobalContext.Provider>);
}