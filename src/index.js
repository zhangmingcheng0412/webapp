import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store"

ReactDOM.render(
    // HashRouter 路由
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

