import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 25px 0 15px 0;
  width: 120px;
  height: 40px;
  font-size: large;
  background-color: rgb(124, 161, 230);
  border: solid 1px rgb(201, 201, 201);
  color: rgb(48, 42, 34);
  &:hover {
    color: white;
    cursor:pointer;
  }
`;
export default StyledButton;
