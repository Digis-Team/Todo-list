import { authTypes } from '../types';

const initialState = {
  profile: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.FILL_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case authTypes.SET_AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
