import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoute from './Router';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import combineReducers from './reducers/index'
import {getBooks} from './actions/actions';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

const store = createStore(combineReducers, applyMiddleware(thunk));

store.dispatch(getBooks()).then(() => {
ReactDOM.render(<Provider store={store}>
    <AppRoute />
</Provider>, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
