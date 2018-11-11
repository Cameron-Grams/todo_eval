import * as actionTypes from './actionTypes'; 






export function registerText( values ){
   return{
       type: actionTypes.addTodo,
       data: values
   }     
}

export function improperInput(){
    return{
        type: actionTypes.improperInput
    }
}

export function updateTodo( item ){
    // here would push to the history of a new component that could update the todo


    return{
        type: actionTypes.performUpdate,
        data: item
    }
}