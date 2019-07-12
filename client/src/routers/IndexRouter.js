import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers/history';
import { alertClear } from '../actions/alert.actions'
import Dashboard from '../components/Dashboard';
import Login from '../components/auth/Login';
import NotFoundPage from '../components/NotFoundPage';
import Users from '../components/users/Users';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Register from '../components/auth/Register';

const IndexRouter = (props) => {
    
    history.listen(() => {
        // clear alert on location change
        props.alertClear()
    });

    return (
        <Router history={history}>
            <div>
                <Switch>
                    <PublicRoute path='/' component={Login} exact={true} />
                    <PublicRoute path='/register' component={Register} />
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <PrivateRoute path='/users' component={Users} />
                    <Route component={NotFoundPage} />
                </Switch>
                {props.alert.message}
            </div>
        </Router>
    );
};


const mapStateToProps = (state) => {
    return {
        alert: state.alert
    };
};

const mapsDispatchToPros = (dispatch) => {
    return {
        alertClear: () => dispatch(alertClear())
    };
};

export default connect(mapStateToProps, mapsDispatchToPros)(IndexRouter);