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

