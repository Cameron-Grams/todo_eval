import React from 'react';
import { connect } from 'react-redux'; 
import SingleTodo from '../../components/SingleTodo'; 

class DisplayTodos extends React.Component{
    constructor( props ){
        super( props );
        this.updateTodo = this.updateTodo.bind( this );
    }

    updateTodo( item ){
        return this.updateTodo( item );
    }
    
    render(){

        const todoDisplay = this.props.todoItems.map( ( item, index ) => {
           return( 
               <SingleTodo key={ index } editTodo={ this.updateTodo( item ) } text={ item.text } />
           )
        })


        return(
            <div>{ todoDisplay }</div>
        ) 
    }
}

const mapStateToProps = ( state ) => ( {
    todoItems: state.reducer.todoItems
})

export default connect( mapStateToProps, {} )( DisplayTodos ); 

