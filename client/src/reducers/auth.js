export default (state= {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                token:action.token
            };
        default:
            return state;
    };
};