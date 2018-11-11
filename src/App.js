import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import './App.css';
import ImportTodos from './containers/InputTodos/InputTodos'; 
import DisplayTodos from './containers/DisplayTodos/DisplayTodos'; 

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
           < ImportTodos /> 
           < DisplayTodos  /> 
        </header>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
    ...state
})

export default connect( mapStateToProps, {} )( App );
