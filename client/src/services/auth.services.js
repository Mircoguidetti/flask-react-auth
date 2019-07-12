import axios from "axios";

export const login = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        auth: { username, password }
    }
    
    return axios('/api/login', requestOptions)
        .then(response => {
            const user = response.data.user
            localStorage.setItem('user', JSON.stringify(user))
            return user
        })
}

export const register = (username, email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: { username, email, password}
    };

    return axios('/api/user', requestOptions)
        .then((response) => {
            return response
        });
};



export const logout = () => {
    localStorage.removeItem('user')
};