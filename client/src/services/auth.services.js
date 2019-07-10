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

export const logout = () => {
    localStorage.removeItem('user')
};