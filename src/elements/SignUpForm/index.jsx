import React from 'react';
import StyledInput from './Input';
import StyledFormContainer from './Container';
import StyledButton from './Button';
import StyledForm from './Form';

export const SignUpForm = () => (
  <StyledFormContainer>
    <h1>Sign Up</h1>
    <StyledForm>
      <StyledInput placeholder="user name" />
      <StyledInput placeholder="email" />
      <StyledInput placeholder="password" />
      <StyledInput placeholder="confirm password" />
      <StyledButton
        type="submit"
      >
        Sign in
      </StyledButton>
    </StyledForm>
    <div>Aleady have an account?</div>
    <a href="/">Log in here</a>
  </StyledFormContainer>
);
