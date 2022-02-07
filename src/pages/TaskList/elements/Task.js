import styled from 'styled-components';

export const StyledTask = styled.input`
  width: 80%;
  border: 0;
  text-decoration: ${(props) => props.textDecoration};
  border: ${(props) => props.border};
  background: #FFFFFC;
`;
