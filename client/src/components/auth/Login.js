import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogin } from '../../actions/auth.actions';
import LoginForm from './LoginForm';

const Login = (props) => {

    const handleLogin = (email, password) => {
        props.startLogin(email, password);
    };

    return (
        <div>
            <h1>Login</h1> 
            <LoginForm handleLogin={handleLogin} />
            <Link to='/register'>Register</Link>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: (email, password) => dispatch(startLogin(email, password)) 
});

export default connect(undefined, mapDispatchToProps)(Login);