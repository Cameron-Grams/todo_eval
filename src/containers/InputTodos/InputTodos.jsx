import React from 'react';
import { connect } from 'react-redux'; 
import InputText from './InputText'; 
import { registerText, improperInput } from '../../actions/todoActions';

class InputPage extends React.Component{

    enterText = ( values ) => {
            if ( values.textTodoInput ){
                this.props.registerText( values );
            } else {
                this.props.improperInput(); 
            }
        }

    render() {
        let displayError = this.props.errorMessage ? 
            <p className="errorMessage" >Please Enter Text</p>:
            null; 

        return (
        <div className="App">
            <header className="App-header">
            <h2>Input Todo:</h2> 
            <p>Add an item to the todo list</p>

            { displayError } 
            
            < InputText onSubmit={ this.enterText } /> 
            </header>
        </div>
        );
    }
}

const mapStateToProps = ( state ) => ({
    errorMessage: state.reducer.errorMessage
})

export default connect( mapStateToProps, { registerText, improperInput } )( InputPage );