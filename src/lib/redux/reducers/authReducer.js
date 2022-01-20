import { authTypes } from '../types';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SUCCESS:
      return {
        ...state,
        ...action.payload,
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
