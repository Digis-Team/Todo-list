import { authTypes } from '../types';

const initialState = {
  email: '',
};
const userData = {
  name: '',
  email: '',
  password: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SIGN_UP:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};
export const registerReducer = (state = userData, action) => {
  switch (action.type) {
    case authTypes.SUCCESS:
      return {
        ...state,
        name: action.payload,
        email: action.payload,
        password: action.payload,
      };
    case authTypes.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
