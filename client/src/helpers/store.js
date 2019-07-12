import thunk from 'redux-thunk'; 
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import authReducer from '../reducers/auth.reducer';
import alertReducer from '../reducers/alert.reducer';
import usersReducer from '../reducers/users.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => { 
    const store = createStore(
        combineReducers({
            auth:authReducer,
            alert: alertReducer,
            users: usersReducer
        }),
    composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
