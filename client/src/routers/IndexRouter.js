import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers/history';
import { alertClear } from '../actions/alert.actions'
import Dashboard from '../components/Dashboard';
import Login from '../components/auth/Login';
import NotFoundPage from '../components/NotFoundPage';

const IndexRouter = (props) => {
    
    history.listen((location, action) => {
        // clear alert on location change
        props.alertClear()
    });

    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path='/' component={Dashboard} exact={true} />
                    <Route path='/login' component={Login} exact={true} />
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