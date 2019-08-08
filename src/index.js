import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import store from "./redux/store"

import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
