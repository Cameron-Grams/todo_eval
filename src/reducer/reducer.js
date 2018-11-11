import * as actionTypes from '../actions/actionTypes'; 


const initialState = {
    errorMessage: false, 
    todoItems: [],
    rank: 0,
    todoId: 1
}


const Reducer = ( state = initialState, action ) => {
    switch( action.type ){
        case( actionTypes.addTodo ):
            let newTodo = {
                rank: state.rank + 1,
                text: action.data.textTodoInput,
                todoId: state.todoId + 1
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

        case( actionTypes.performUpdate ): 

// this would have to be managed through the other component

            return {
                ...state
            }
 
        default: {
            return {
                ...state
            }
        }
    }
}

export default Reducer; 