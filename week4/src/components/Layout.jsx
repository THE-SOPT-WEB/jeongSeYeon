import React from "react";
import styled from "styled-components";
function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

export default Layout;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
