// SET TOKEN
export const setToken = (token='') => ({
    type:'SET_TOKEN',
    token
});

// VERIFY TOKEN
export const verifyToken = (token='') => ({
    type: 'VERIFY_TOKEN',
    token
});