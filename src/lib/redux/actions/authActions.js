import { authTypes } from '../types';
import { api } from '../../../api';

export const authActions = Object.freeze({
  signUp: (values) => ({
    type: authTypes.SIGN_UP,
    payload: values,
  }),

  fillUserProfileAsync: (token) => async () => ({
    type: authTypes.SUCCESS,
    payload: token.json(),
  }),
  fillError: (error) => ({
    type: authTypes.ERROR,
    payload: error,
  }),

  signUpAsync: (values) => async (dispatch) => {
    console.log(values);
    const response = await api.auth.registerUser(values);
    console.log('response');
    const { data: token } = await response.json();
    console.log(token);
    localStorage.setItem('token', token);
    dispatch(authActions.fillUserProfileAsync(token))
      .catch((err) => {
        dispatch(authActions.fillError(err.message));
        console.error(err.message);
      });
  },
});

// export const SignIn = (values) => (dispatch) => api.auth.registerUser(values)
//   .then(
//     () => dispatch(authActions.signUp),
//   )
//   .catch((err) => {
//     console.error(err.message);
//   });
