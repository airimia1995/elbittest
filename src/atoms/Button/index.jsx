import styled from "styled-components";
const Button = ({ onClick, children, testId }) => {
  return <ButtonStyled data-testid={testId} onClick={onClick}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  padding: 5px 10px;
  color: black;
  background-color: #72A0C1;
  margin-right: 20px;
`;

export default Button;
