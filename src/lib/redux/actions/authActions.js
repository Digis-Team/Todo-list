import { authTypes } from '../types';
import { api } from '../../../api';

export const authActions = Object.freeze({
  signUp: (values) => ({
    type: authTypes.SIGN_UP,
    payload: values,
  }),

  fillUserProfileAsync: (token) => async () => ({
    type: authTypes.SUCCESS,
    payload: token,
  }),
  fillError: (error) => ({
    type: authTypes.ERROR,
    payload: error,
  }),

  signUpAsync: (values) => async (dispatch) => {
    try {
      const response = await api.auth.registerUser(values);
      console.log(response.data);
      const token = await response.data.accessToken;
      console.log(token);
      localStorage.setItem('token', token);
      dispatch(authActions.fillUserProfileAsync(token));
    } catch (err) {
      dispatch(authActions.fillError(err.message));
      console.error(err.message);
    }
  },
});
