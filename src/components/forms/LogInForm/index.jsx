import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  StyledFormContainer, StyledButton, StyledForm, StyledInput, StyledError,
} from '../../../elements';
import {
  SIGN_UP_LINK_TITLE, QUESTION_TITLE, LOG_IN_TITLE,
} from '../../../constants';
import { authActions } from '../../../lib/redux/actions';
import { selectError } from '../../../lib/redux/selectors';

export const LogInForm = () => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const error = useSelector(selectError);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    dispatch(authActions.logInAsync({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <StyledFormContainer>
      <h1>{LOG_IN_TITLE}</h1>
      <StyledForm>
        <StyledInput placeholder="email" name="email" type="email" ref={emailRef} />
        <StyledInput placeholder="password" name="password" type="password" ref={passwordRef} />
        <StyledError>{error}</StyledError>
        <StyledButton
          type="submit"
          onClick={handleSubmit}
          disabled={!emailRef || !passwordRef}
        >
          {LOG_IN_TITLE}
        </StyledButton>
      </StyledForm>
      <div>{QUESTION_TITLE}</div>
      <Link to="/signUp">{SIGN_UP_LINK_TITLE}</Link>
    </StyledFormContainer>
  );
};
