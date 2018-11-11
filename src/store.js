import { combineReducers, createStore, compose } from 'redux'; 
import { reducer as FormReducer } from 'redux-form'; 
import Reducer from './reducer/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const MasterReducer = combineReducers( {
    reducer: Reducer,
    form: FormReducer
    })

const store = createStore(
    MasterReducer,
    composeEnhancers()
)

export default store;