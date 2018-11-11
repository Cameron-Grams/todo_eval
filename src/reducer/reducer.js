import * as actionTypes from '../actions/actionTypes'; 


const initialState = {
    errorMessage: false, 
    todoItems: [ { } ],
    rank: 0
}


const Reducer = ( state = initialState, action ) => {
    switch( action.type ){
        case( actionTypes.addTodo ):
            let newTodo = {
                rank: state.rank + 1,
                text: action.data.textTodoInput
            }       
            return {
                ...state,
                todoItems: [ ...state.todoItems, newTodo ]
            }

        case( actionTypes.improperInput ):
            return {
                ...state,
                errorMessage: !state.errorMessage
            }

 
        default: {
            return {
                ...state
            }
        }
    }
}

export default Reducer; 