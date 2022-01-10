import React from 'react';
import propTypes from 'prop-types';
import { StyledInput, StyledError } from '../../../elements';

export const FormInput = ({
  placeholder, type, onChange, errorMessage, required,
}) => (
  <div>
    <StyledInput
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
    <StyledError>{errorMessage}</StyledError>
  </div>
);

FormInput.defaultProps = {
  errorMessage: '',
  required: true,
};

FormInput.propTypes = {
  placeholder: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  errorMessage: propTypes.string,
  required: propTypes.bool,
};
