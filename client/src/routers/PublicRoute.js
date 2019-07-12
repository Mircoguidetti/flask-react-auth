import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({
    isLoggedIn,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isLoggedIn ? (
            <Redirect to='/dashboard' />
        ): (
            <Component {...props}/>
        )
    )} />
);

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(PublicRoute);