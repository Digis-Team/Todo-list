import React from 'react';
import StyledInput from './components/Input';

export const SignUpForm = () => (
  <div className="loginBox">
    <h1>Sign Up</h1>

    <form className="form">
      <StyledInput placeholder="user name" />
      {/* <input
        className="input"
        name="username"
        placeholder="user name"
      /> */}
      <input
        className="input"
        name="email"
        placeholder="email"
      />
      <input
        className="input"
        name="password"
        placeholder="password"
      />
      <input
        className="input"
        type="password"
        placeholder="confirm password"
      />
      <button
        className="signUpSubmit"
        type="submit"
      >
        Sign in
      </button>
    </form>
    <div>Aleady have an account?</div>
    <a href="/">Log in here</a>
  </div>
);
