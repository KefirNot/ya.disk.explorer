import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './store/reducer';
import saga from './store/saga';

const sagaMiddleware = createSagaMiddleware(saga);

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(saga);

export default props => <Provider store={store}>{props.children}</Provider>;

