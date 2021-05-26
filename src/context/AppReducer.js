export default (state, action) => {
    switch (action.type) {

        case 'GET_TRANSACTION':
            return{
                ...state,
                loading: false,
                transactions: action.payload
            }

        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }

        case 'ADD_TRANSACTION':
            const updTransactions = [...state.transactions, action.payload]
            localStorage.setItem('transactions', JSON.stringify(updTransactions))
            return{
                ...state,
                transactions: updTransactions
            }

        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }



        default:
            return state
    }
}