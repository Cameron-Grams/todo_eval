import { combineReducers, createStore, compose } from 'redux'; 
import Reducer from './reducer/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const MasterReducer = combineReducers( {
    reducer: Reducer
    })

const store = createStore(
    MasterReducer,
    composeEnhancers()
)

export default store;