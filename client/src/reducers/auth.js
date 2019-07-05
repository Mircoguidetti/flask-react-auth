import axios from 'axios';

const initialAuthState = {
    token:localStorage.setItem('token', ''),
    tokenIsValid: false,
}


export default (state= initialAuthState, action) => {
    switch(action.type){
        case 'SET_TOKEN':
            return {
                token:localStorage.setItem('token', JSON.stringify(action.token))
            }
        case 'VERIFY_TOKEN':
            // const tok = localStorage.getItem('token')
            // console.log(tok)
            axios.get('/api/verify-token', {
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }
            }).then((response) => {
                // console.log('here good')
                // const token = localStorage.getItem('token')
                // console.log(token)
                return {
                    ...state,
                    tokenIsValid: true
                }
            }).catch((error) => {
                    console.log('here error')
                    console.log(error.response)
                    const emptyToken = localStorage.setItem('token', 'mbfdji');
                 
                    
                    
                return {
                    ...state,
                    token: localStorage.setItem('token', 'vvfjdkv'),
                    tokenIsValid:true
                }
            });
           

            
            
        default:
            return state;
    };
};