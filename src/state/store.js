import { createStore, applyMiddleware } from 'redux';
import { middleware as flashMiddleware } from 'redux-flash';
import thunk from 'redux-thunk';

import reducers from './reducers';
import axiosInstance from '../api';
import { setToken } from './middleware';

const flashOptions = { timeout: 5000 };

export default createStore(
  reducers,
  applyMiddleware(
    thunk.withExtraArgument(axiosInstance),
    setToken,
    flashMiddleware(flashOptions)
  )
);
