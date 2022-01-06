import React, { useEffect, useState } from 'react';
// import { isEmail } from 'validator';
import {
  StyledFormContainer, StyledButton, StyledInput, StyledForm, StyledError,
} from '../../../elements';
import {
  ERROR_MESSAGES, SIGN_UP_TITLE, QUESTION_TITLE, LOG_IN_LINK_TITLE,
} from '../../../constants';

export const SignUpForm = () => {
  const emailRegex = /\S+@\S+\.\S+/;
  const [errorNameMessage, setErrorNameMessage] = useState('');
  const [errorEmailMessage, setErrorEmailMessage] = useState('');
  const [errorPasswordMessage, setErrorPasswordMessage] = useState('');
  const [errorRepeatPassMessage, setErrorRepeatPassMessage] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const {
    name, email, shortPassword, needsLowerCasePassword,
    needsUpperCasePassword, diffPassword,
  } = ERROR_MESSAGES;

  const onNameChange = (event) => {
    if (event.target.value.length === 0) {
      setErrorNameMessage(name);
    } else {
      setErrorNameMessage('');
    }
  };

  const onEmailChange = (event) => {
    if (emailRegex.test(event.target.value) || event.target.value.length === 0) {
      setErrorEmailMessage('');
    } else {
      setErrorEmailMessage(email);
    }
  };

  const onPasswordChange = (event) => {
    const passValue = event.target.value;
    setPassword(passValue);
    if (passValue.length < 8) {
      setErrorPasswordMessage(shortPassword);
    } else if (passValue === passValue.toLowerCase()) {
      setErrorPasswordMessage(needsUpperCasePassword);
    } else if (passValue === passValue.toUpperCase()) {
      setErrorPasswordMessage(needsLowerCasePassword);
    } else {
      setErrorPasswordMessage('');
    }
  };

  const onRepeatPasswordChange = (event) => {
    if (event.target.value !== password || event.target.value.length === 0) {
      setErrorRepeatPassMessage(diffPassword);
    } else {
      setErrorRepeatPassMessage('');
    }
  };

  useEffect(() => {
    setIsButtonDisabled(!!errorEmailMessage || !!errorPasswordMessage
      || !!errorRepeatPassMessage || !!errorNameMessage);
  }, [errorNameMessage, errorPasswordMessage, errorRepeatPassMessage, errorEmailMessage]);

  return (
    <StyledFormContainer>
      <h1>{SIGN_UP_TITLE}</h1>
      <StyledForm>
        <StyledInput placeholder="user name" required onChange={onNameChange} onClick={onNameChange} />
        <StyledError>{errorNameMessage}</StyledError>
        <StyledInput placeholder="email" required onChange={onEmailChange} />
        <StyledError>{errorEmailMessage}</StyledError>
        <StyledInput placeholder="password" required type="password" onChange={onPasswordChange} />
        <StyledError>{errorPasswordMessage}</StyledError>
        <StyledInput placeholder="confirm password" required type="password" onChange={onRepeatPasswordChange} />
        <StyledError>{errorRepeatPassMessage}</StyledError>
        <StyledButton
          type="submit"
          disabled={isButtonDisabled}
        >
          {SIGN_UP_TITLE}
        </StyledButton>
      </StyledForm>
      <div>{QUESTION_TITLE}</div>
      <a href="/">{LOG_IN_LINK_TITLE}</a>
    </StyledFormContainer>
  );
};
