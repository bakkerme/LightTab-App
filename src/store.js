import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers/index';
import socket from './middleware/socket';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(socket))
);