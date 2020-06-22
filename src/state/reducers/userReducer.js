import {
  CREATE_PROFILE,
  CREATING_PROFILE,
  LOGGED_IN,
  LOGIN_IN,
} from '../actions/types';

const INITIAL_STATE = {
  user: null,
  creatingProfile: false,
  loginIn: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    case CREATING_PROFILE:
      return {
        ...state,
        creatingProfile: action.payload,
      };
    case LOGIN_IN:
      return {
        ...state,
        loginIn: action.payload,
      };
    case LOGGED_IN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
