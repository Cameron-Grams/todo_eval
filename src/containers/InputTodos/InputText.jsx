import React from 'react';
import { Field, reduxForm } from 'redux-form'; 

let InputText = ( props ) => {
    return(
        <div className="overallFormDiv" >  
        <form className="textForm" onSubmit={ props.handleSubmit } >
            <div>< Field className = "textTitle generalInput" name="textTodoInput" component={ "input" } placeholder="Input Todo"   /></div>
            <button className="submitButton" type="submit" >Add Todo</button>
        </form>
        </div>
    )
}

InputText = reduxForm({
    form: 'InputText'
})( InputText );

export default InputText;