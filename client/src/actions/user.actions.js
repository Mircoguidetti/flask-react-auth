import * as userServices from '../services/user.services';
import { startLogout } from '../actions/auth.actions';

const getUsers = (users) => ({type:'GET_USERS', users});

export const startGetUsers = (token) => {
    return dispatch => {
        userServices.getUsers(token).then(users => {
            dispatch(getUsers(users))
        })
        .catch(() => {
            dispatch(startLogout());
        })
    };
};