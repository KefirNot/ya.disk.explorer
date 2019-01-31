import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import reducer from './store/reducer';
import saga from './store/saga';

const sagaMiddleware = createSagaMiddleware(saga);

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, createLogger({ collapsed: true })),
);

sagaMiddleware.run(saga);

export default props => <Provider store={store}>{props.children}</Provider>;

