import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import IndexRouter from './routers/IndexRouter';
import configStore from './store/configStore';

const store = configStore();

const jsx = (
    <Provider store={store}>
        <IndexRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app')); 