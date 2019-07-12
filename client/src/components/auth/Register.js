import React from 'react';
import { connect } from 'react-redux';

import { startRegister } from '../../actions/auth.actions';
import RegisterForm from './RegisterForm';

const Register = (props) => {

    const handleRegister = (username, email, password) => {
        props.startRegister(username, email, password)
    };

    return (
        <div>
            <h1>Register</h1>
            <RegisterForm handleRegister={handleRegister} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startRegister: (username, email, password) => dispatch(startRegister(username, email, password))
});

export default connect(undefined, mapDispatchToProps)(Register);