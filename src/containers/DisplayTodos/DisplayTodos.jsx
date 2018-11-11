import React from 'react';
import { connect } from 'react-redux'; 
import SingleTodo from '../../components/SingleTodo'; 

class DisplayTodos extends React.Component{
    
    render(){

        const todoDisplay = this.props.todoItems.map( ( item, index ) => {
           return( 
               <SingleTodo key={ index } text={ item.text } />
           )
        })


        return(
            <p>{ todoDisplay }</p> 
        ) 
    }
}

const mapStateToProps = ( state ) => ( {
    todoItems: state.reducer.todoItems
})

export default connect( mapStateToProps, {} )( DisplayTodos ); 

