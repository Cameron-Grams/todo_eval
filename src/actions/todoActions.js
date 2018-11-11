import * as actionTypes from './actionTypes'; 






export function registerText( values ){
    console.log( 'in todo actions with values ', values ); 

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

