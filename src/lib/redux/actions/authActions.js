import { createBrowserHistory } from 'history';
import { authTypes } from '../types';
import { api } from '../../../api';
import { book } from '../../../navigation/book';

export const authActions = Object.freeze({
  fillUserProfile: (userInfo) => ({
    type: authTypes.FILL_USER_PROFILE,
    payload: userInfo,
  }),
  fillUserProfileAsync: (id) => async (dispatch) => {
    try {
      const response = await api.auth.getUserInfo(id);
      dispatch(authActions.fillUserProfile(response.data));
    } catch (err) {
      dispatch(authActions.setFetchingError(err.response.data));
    }
  },
  setFetchingError: (error) => ({
    type: authTypes.SET_AUTH_ERROR,
    payload: error,
  }),
  signUpAsync: (values) => async (dispatch) => {
    try {
      const response = await api.auth.registerUser(values);
      const { data: { user: { id } } } = response;
      localStorage.setItem('id', id);
      dispatch(authActions.fillUserProfileAsync(id));
    } catch (err) {
      dispatch(authActions.setFetchingError(err.response.data));
    }
  },
  logInAsync: (values) => async (dispatch) => {
    try {
      const response = await api.auth.loginUser(values);
      const { data: { user: { id } } } = response;
      localStorage.setItem('id', id);
      dispatch(authActions.fillUserProfileAsync(id));
      const history = createBrowserHistory();
      history.push(book.toDoList);
    } catch (err) {
      dispatch(authActions.setFetchingError(err.response.data));
    }
  },
});
