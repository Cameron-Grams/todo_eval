import React from 'react'; 

const SingleTodo = ( props ) => {

        return(
            <div>
                { props.text }
                <button onClick={ props.editTodo }>Edit</button>
            </div>
        ) 

}

export default SingleTodo; 