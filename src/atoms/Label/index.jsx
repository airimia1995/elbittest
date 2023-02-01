import styled, { css } from "styled-components";
const Label = ({ children, isBoom, testId }) => {
  return <LabelStyled data-testid={testId} isBoom={isBoom}>{children}</LabelStyled>;
};

const LabelStyled = styled.span`
  padding: 10px 10px;
  color: black;
  border: ${props => props.isBoom && "3px dashed red;"};
`;

export default Label;
