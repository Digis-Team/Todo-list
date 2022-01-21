import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { SignUpPage } from './pages';
import { book } from './navigation/book';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={book.root} element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
