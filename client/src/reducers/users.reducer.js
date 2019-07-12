const initialUsersState = []

export default (state=initialUsersState, action) => {
    switch(action.type){
        case 'GET_USERS':
            return action.users
        
        default:
            return state;
    };
};