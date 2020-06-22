import { combineReducers } from 'redux';
import { reducer as flashReducer } from 'redux-flash';

import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import userReducer from './userReducer';

export default combineReducers({
  data: productsReducer,
  categories: categoriesReducer,
  auth: userReducer,
  flash: flashReducer,
});
