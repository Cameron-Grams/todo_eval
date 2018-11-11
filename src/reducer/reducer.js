import * as actionTypes from '../actions/actionTypes'; 


const initialState = {
    todoItems: [ { } ]
}


const Reducer = ( state = initialState, action ) => {
    switch( action.type ){
        case( actionTypes.addTodo ):
        {
            return {
                ...state,
                todoItems: [ ...todoItems, action.data ]
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