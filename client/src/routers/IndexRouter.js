import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';

const IndexRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} exact={true} />
        </Switch>
    </BrowserRouter>
);

export default IndexRouter;