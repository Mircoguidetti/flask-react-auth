import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Login from '../components/auth/Login';

const IndexRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Dashboard} exact={true} />
            <Route path='/login' component={Login} />
        </Switch>
    </BrowserRouter>
);

export default IndexRouter;