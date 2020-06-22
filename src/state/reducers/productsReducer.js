import {
  FETCH_PRODUCTS,
  ADDING_PRODUCT,
  CREATE_PRODUCT,
} from '../actions/types';

const INITIAL_STATE = {
  fetchingProducts: false,
  addingProduct: false,
  products: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    case ADDING_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    default:
      return state;
  }
};
