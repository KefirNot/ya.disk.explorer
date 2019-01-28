import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);

export default props => <Provider store={store}>{props.children}</Provider>;

