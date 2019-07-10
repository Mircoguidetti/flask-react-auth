let user = JSON.parse(localStorage.getItem('user'));

const initialAuthState = user ? {loggedIn: true, user} : {};

export default (state = initialAuthState, action) => {
    switch(action.type){
        case 'LOGIN_REQUEST':
            return {
                loggedIn: true,
                user: action.user
            };
        case 'LOGIN_SUCCESS':
            return {
                loggedIn: true,
                user: action.user
            }
        case 'LOGIN_FAILURE':
            return {}
        case 'LOGOUT':
            return {}
        default:
            return state;
    };
};