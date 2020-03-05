import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import reducer from './reducer';

let rootReducer = combineReducers({
    reducer,
    form: formReducer
});

let store = createStore( rootReducer, applyMiddleware(thunk) );

export default store;