import React, { useState } from 'react';
import { connect } from 'react-redux';

import { alertFailure } from '../../actions/alert.actions';

const RegisterForm = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if(!username){
            props.alertFailure('Username is required');
        }else if(!email){
            props.alertFailure('Email is required');
        }else if(!password){
            props.alertFailure('Password is required');
        }else{
            props.handleRegister(username, email, password);
        }
    };

    return (
        <form onSubmit={handleRegister}> 
            <input 
                type='text'
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type='text'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password' 
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input 
                type='submit'
            />
        </form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    alertFailure: (message) => dispatch(alertFailure(message))
});

export default connect(undefined, mapDispatchToProps)(RegisterForm);