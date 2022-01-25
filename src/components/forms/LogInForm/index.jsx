import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  StyledFormContainer, StyledButton, StyledForm,
} from '../../../elements';
import {
  SIGN_UP_LINK_TITLE, QUESTION_TITLE, LOG_IN_TITLE,
} from '../../../constants';
import { FormInput } from '../inputs';
import { authActions } from '../../../lib/redux/actions';

export const LogInForm = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const onEmailChange = (event) => setUserInfo({ ...userInfo, email: event.target.value });
  const onPasswordChange = (event) => setUserInfo({ ...userInfo, password: event.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userInfo;
    dispatch(authActions.logInAsync({ email, password }));
  };
  return (
    <StyledFormContainer>
      <h1>{LOG_IN_TITLE}</h1>
      <StyledForm>
        <FormInput placeholder="email" type="email" onChange={onEmailChange} value={userInfo.email} />
        <FormInput placeholder="password" type="password" onChange={onPasswordChange} value={userInfo.password} />
        <StyledButton
          type="submit"
          onClick={handleSubmit}
        >
          {LOG_IN_TITLE}
        </StyledButton>
      </StyledForm>
      <div>{QUESTION_TITLE}</div>
      <Link to="/">{SIGN_UP_LINK_TITLE}</Link>
    </StyledFormContainer>
  );
};
