import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import IndexRouter from './routers/IndexRouter';
import store  from './helpers/store';

const jsx = (
    <Provider store={store()}>
        <IndexRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app')); 