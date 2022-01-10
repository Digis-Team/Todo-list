import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpPage } from './pages';
import { book } from './navigation/book';
import { authActions } from './lib/redux/actions';
import { selectEmail } from './lib/redux/selectors';

function App() {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  console.log(email);
  useEffect(() => {
    dispatch(authActions.signUp('test'));
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route path={book.root} element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
