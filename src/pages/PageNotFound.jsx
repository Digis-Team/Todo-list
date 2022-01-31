import React from 'react';
import { Link } from 'react-router-dom';
import { StyledErrorContainer, StyledImage } from '../elements';

export const PageNotFound = () => (
  <StyledErrorContainer>
    <StyledImage
      src="https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found.png"
      alt="not found"
    />
    <h2>
      <Link to="/">Go Back </Link>
    </h2>
  </StyledErrorContainer>
);
