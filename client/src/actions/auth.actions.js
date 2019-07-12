import * as authServices from '../services/auth.services';
import { alertFailure, alertSuccess } from './alert.actions';

// LOGIN_SUCCESS
export const loginSuccess = user => ({ type:'LOGIN_SUCCESS', user });

// LOGIN_FAILURE
export const loginFailure = () => ({ type: 'LOGIN_FAILURE' });

// LOGOUT
const logout = () => ({ type: 'LOGOUT' });


// Start login
export const startLogin = (username, password) => {
    return dispatch => {
        return authServices.login(username, password)
            .then(user => {
                dispatch(loginSuccess(user));
                dispatch(alertSuccess(`Welcome back ${user.username}`));
            })
            .catch(e => {
                const error = e.response.data.message;
                dispatch(loginFailure())
                dispatch(alertFailure(error))
            });
    };
};

export const startRegister = (username, email, password, ownProps) => {
    return dispatch => {
        return authServices.register(username, email, password)
            .then((res) => {
                dispatch(alertSuccess(`Welcome ${username}, please login to continue`));
                window.location.href = '/'
            }).catch(e => {
                const error = e.response.data.message;
                dispatch(alertFailure(error));
            });
    };
};


// Start logout
export const startLogout = () => {
    return dispatch => {
        authServices.logout();
        dispatch(logout());
        dispatch(alertSuccess('You have been logged out'));
    };
};

