import * as actionTypes from './actionTypes'; 



export function respond(){
    console.log( 'in function respond' ); 
    return{
        type: actionTypes.One
    }
}