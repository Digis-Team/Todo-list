import React, { useState } from 'react';
import {
  StyledFormContainer, StyledButton, StyledForm,
} from '../../../elements';
import {
  ERROR_MESSAGES, SIGN_UP_TITLE, QUESTION_TITLE, LOG_IN_LINK_TITLE, EMAIL_REGEX,
} from '../../../constants';
import { FormInput } from '../inputs';

const {
  shortName, wrongEmail, shortPassword, needsLowerCasePassword,
  needsUpperCasePassword, diffPassword,
} = ERROR_MESSAGES;

export const SignUpForm = () => {
  const [errors, setErrors] = useState({
    errorNameMessage: '',
    errorEmailMessage: '',
    errorPasswordMessage: '',
    errorConfirmPassMessage: '',
  });
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onNameChange = (event) => {
    const nameValue = event.target.value;
    if (!nameValue) {
      setErrors({ ...errors, errorNameMessage: shortName });
    } else {
      setErrors({ ...errors, errorNameMessage: '' });
    }
    setUserInfo({ ...userInfo, name: nameValue });
  };

  const onEmailChange = (event) => {
    const emailValue = event.target.value;
    setUserInfo({ ...userInfo, email: emailValue });
    if (EMAIL_REGEX.test(emailValue)) {
      setErrors({ ...errors, errorEmailMessage: '' });
    } else {
      setErrors({ ...errors, errorEmailMessage: wrongEmail });
    }
  };

  const onPasswordChange = (event) => {
    const passValue = event.target.value;
    setUserInfo({ ...userInfo, password: passValue });
    if (passValue.length < 8) {
      setErrors({ ...errors, errorPasswordMessage: shortPassword });
    } else if (passValue === passValue.toLowerCase()) {
      setErrors({ ...errors, errorPasswordMessage: needsUpperCasePassword });
    } else if (passValue === passValue.toUpperCase()) {
      setErrors({ ...errors, errorPasswordMessage: needsLowerCasePassword });
    } else {
      setErrors(errors.errorPasswordMessage = '');
    }
  };

  const onConfirmPasswordChange = (event) => {
    const confPassValue = event.target.value;
    if (confPassValue !== userInfo.password) {
      setErrors({ ...errors, errorConfirmPassMessage: diffPassword });
    } else {
      setErrors({ ...errors, errorConfirmPassMessage: '' });
    }
  };

  return (
    <StyledFormContainer>
      <h1>{SIGN_UP_TITLE}</h1>
      <StyledForm>
        <FormInput placeholder="user name" type="text" onChange={onNameChange} errorMessage={errors.errorNameMessage} value={userInfo.name} />
        <FormInput placeholder="email" type="email" onChange={onEmailChange} errorMessage={errors.errorEmailMessage} value={userInfo.email} />
        <FormInput placeholder="password" type="password" onChange={onPasswordChange} errorMessage={errors.errorPasswordMessage} value={userInfo.password} />
        <FormInput placeholder="confirm password" type="password" onChange={onConfirmPasswordChange} errorMessage={errors.errorConfirmPassMessage} />
        <StyledButton
          type="submit"
          disabled={!!errors.errorEmailMessage || !!errors.errorPasswordMessage
            || !!errors.errorRepeatPassMessage || !!errors.errorNameMessage}
        >
          {SIGN_UP_TITLE}
        </StyledButton>
      </StyledForm>
      <div>{QUESTION_TITLE}</div>
      <a href="/">{LOG_IN_LINK_TITLE}</a>
    </StyledFormContainer>
  );
};
