import { useDispatch as dispatch } from 'react-redux';
// import { values } from 'json-server-auth';
import { authTypes } from '../types';
import { api } from '../../../api';

export const authActions = Object.freeze({
  signUp: (values) => ({
    type: authTypes.SIGN_UP,
    payload: values,
  }),

  fillUserProfile: (response) => ({
    type: authTypes.SUCCESS,
    payload: response.json,
  }),
  fillError: (error) => ({
    type: authTypes.ERROR,
    payload: error,
  }),

  async signUpAsync(values) {
    console.log(values);
    await api.auth.registerUser(values)
      .then(
        (response) => {
          console.log('response');
          console.log(response.json());
          const { data: token } = response.json();
          console.log(token);
          localStorage.setItem('token', token);
          dispatch(authActions.fillUserProfile(token));
        },
      )
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
