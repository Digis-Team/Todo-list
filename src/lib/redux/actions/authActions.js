import { authTypes } from '../types';
import { api } from '../../../api';

export const authActions = Object.freeze({
  fillUserProfile: (userInfo) => ({
    type: authTypes.SUCCESS,
    payload: userInfo,
  }),
  fillUserProfileAsync: (id) => async (dispatch) => {
    try {
      const response = await api.auth.getUserInfo(id);
      console.log(response);
      dispatch(authActions.fillUserProfile(response.data[0]));
    } catch (err) {
      console.error(err.message);
    }
  },
  fillError: (error) => ({
    type: authTypes.ERROR,
    payload: error,
  }),
  fillErrorAsync: (error) => async (disptch) => {
    disptch(authActions.fillError(error));
  },

  signUpAsync: (values) => async (dispatch) => {
    try {
      const response = await api.auth.registerUser(values);
      console.log(response.data);
      const { data: { user: { id } } } = response;
      console.log(id);
      localStorage.setItem('id', id);
      dispatch(authActions.fillUserProfileAsync(localStorage.getItem('id')));
    } catch (err) {
      dispatch(authActions.fillError(err.message));
      console.error(err.message);
    }
  },
});
