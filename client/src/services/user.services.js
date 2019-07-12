import axios from 'axios';

export const getUsers = (token) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'x-access-token':token, 'Content-Type': 'application/json' },
    }
    return axios('/api/users', requestOptions)
        .then(response => {
            const users = response.data.users
            return users
        })
};

