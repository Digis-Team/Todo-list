import React, { useEffect } from 'react';
import {
  Routes, Route, Navigate, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import {
  SignUpPage, LogInPage, ToDoList, PageNotFound,
} from './pages';
import { book } from './navigation/book';
import { selectProfile } from './lib/redux/selectors';
import { authActions } from './lib/redux/actions';

const PrivateRoute = ({ children }) => {
  const profile = useSelector(selectProfile);

  if (profile) {
    return children;
  }
  return <Navigate to={book.login} replace />;
};

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector(selectProfile);

  useEffect(() => {
    const savedId = localStorage.getItem('id');
    if (savedId) {
      dispatch(authActions.fillUserProfileAsync(savedId));
    }
  }, []);

  useEffect(() => {
    if (profile) {
      navigate(book.toDoList);
    }
  }, [profile]);

  return (
    <Routes>
      <Route path={book.root} element={<Navigate to={book.login} replace />} />
      <Route path={book.signUp} element={<SignUpPage />} />
      <Route path={book.login} element={<LogInPage />} />
      <Route
        path={book.toDoList}
        element={(
          <PrivateRoute>
            <ToDoList />
          </PrivateRoute>
        )}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
PrivateRoute.defaultProps = {
  children: null,
};
PrivateRoute.propTypes = {
  children: propTypes.element,
};
