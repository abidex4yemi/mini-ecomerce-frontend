import {
  FETCH_PRODUCTS,
  ADDING_PRODUCT,
  CREATE_PRODUCT,
  FETCH_CATEGORIES,
  CREATING_PROFILE,
  CREATE_PROFILE,
  LOGIN_IN,
  LOGGED_IN,
} from './types';

export const fetchProducts = () => (dispatch, getState, api) => {
  dispatch({
    type: FETCH_PRODUCTS,
    payload: { fetchingProducts: true },
  });

  return api()
    .get('/products')
    .then((res) => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: {
          fetchingProducts: false,
          products: res.data.body.products,
        },
      });

      return res;
    })
    .catch((err) => err);
};

export const addProduct = (product) => (dispatch, getState, api) => {
  dispatch({
    type: ADDING_PRODUCT,
    payload: { addingProduct: true },
  });

  return api()
    .post('/products', product)
    .then((res) => {
      dispatch({
        type: ADDING_PRODUCT,
        payload: { addingProduct: false },
      });

      dispatch({
        type: CREATE_PRODUCT,
        payload: {
          product: res.data.body,
        },
      });

      return res;
    })
    .catch((err) => {
      dispatch({
        type: ADDING_PRODUCT,
        payload: { addingProduct: false },
      });

      return err;
    });
};

export const fetchCategories = () => (dispatch, getState, api) => {
  return api()
    .get('/categories')
    .then((res) => {
      dispatch({
        type: FETCH_CATEGORIES,
        payload: res.data.body.categories,
      });

      return res;
    })
    .catch((err) => err);
};

export const createProfile = (profileData) => (dispatch, getState, api) => {
  dispatch({ type: CREATING_PROFILE, payload: true });

  return api()
    .post('/auth/signup', profileData)
    .then((res) => {
      dispatch({ type: CREATING_PROFILE, payload: false });

      dispatch({
        type: CREATE_PROFILE,
        payload: res.data.body,
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: CREATING_PROFILE, payload: false });
      return err;
    });
};

export const login = (credentials) => (dispatch, getState, api) => {
  dispatch({ type: LOGIN_IN, payload: true });

  return api()
    .post('/auth/login', credentials)
    .then((res) => {
      dispatch({ type: LOGIN_IN, payload: false });

      dispatch({
        type: LOGGED_IN,
        payload: res.data.body,
      });

      return res;
    })
    .catch((err) => {
      dispatch({ type: LOGIN_IN, payload: false });
      return err;
    });
};
