import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import AuthForm from './AuthForm';
import { startLogin } from '../../actions/auth.actions';

const Login = (props) => {
    const [redirect, setRedirect] = useState(false);
    
    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to={{
                pathname: '/',
                message:props.alert.message
            }}/>
        };
    };

    const handleLogin = (email, password) => {
        props.startLogin(email, password);
        
    };

    useEffect(() => {
        if(props.auth.user) {
           setRedirect(true)
        } 
    },[props.auth]);

    return (
        <div>
            { renderRedirect() }
            <Link to='/'>Go back</Link>
            <h1>Login</h1> 
            <AuthForm handleLogin={handleLogin} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        alert: state.alert,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: (email, password) => dispatch(startLogin(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);