import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { respond } from './actions/timerActions'; 
import './App.css';

import DisplayTodos from './containers/DisplayTodos'; 

class App extends Component {
  constructor( props ){
    super( props );
    this.sendResponse = this.sendResponse.bind( this );
  }

  sendResponse(){
     return this.props.respond(); 
  }

  render() {




    return (

      <div className="App">
        <header className="App-header">
           < DisplayTodos  /> 
        </header>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => ( {
    ...state
})

export default connect( mapStateToProps, { respond } )( App );
