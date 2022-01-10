import React from 'react';
import propTypes from 'prop-types';
import { StyledInput, StyledError } from '../../../elements';

export const FormInput = (props) => {
  const { placeholder, onChange, errorMessage } = props;
  return (
    <div>
      <StyledInput
        placeholder={placeholder}
        required
        onChange={onChange}
        onClick={onChange}
      />
      <StyledError>{errorMessage}</StyledError>
    </div>
  );
};
FormInput.defaultProps = {
  errorMessage: '',
};

FormInput.propTypes = {
  placeholder: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  errorMessage: propTypes.string,
};
