import * as actionTypes from '../actions/actionTypes'; 


const initialState = {
    receivedPage: false
}


const Reducer = ( state = initialState, action ) => {
    switch( action.type ){
        case( actionTypes.One ):
        {
            return {
                ...state,
                receivedPage: !state.receivedPage
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default Reducer; 