import { authTypes } from '../types';

export const authActions = Object.freeze({
  signUp: (values) => ({
    type: authTypes.SIGN_UP,
    payload: values,
  }),
});
