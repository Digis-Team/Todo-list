import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { SignUpPage, LogInPage, ToDoList } from './pages';
import { book } from './navigation/book';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={book.root} element={<SignUpPage />} />
        <Route path={book.login} element={<LogInPage />} />
        <Route path={book.toDoList} element={<ToDoList />} />
      </Routes>
    </Router>
  );
}

export default App;
