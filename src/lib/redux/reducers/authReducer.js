import { authTypes } from '../types';

const initialState = {
  email: '',
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
