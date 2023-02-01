import styled, { css } from "styled-components";
const Layout = ({ children }) => <LayoutStyled><div>{children}</div></LayoutStyled>;

const LayoutStyled = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default Layout;
