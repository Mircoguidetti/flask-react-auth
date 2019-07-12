import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isLoggedIn ? (
            <Component {...props} />
        ):(
            <Redirect to='/' />
        )
    )} />
);

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.loggedIn
    };
};

export default connect(mapStateToProps)(PrivateRoute);