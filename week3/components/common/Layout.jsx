import React from "react";
import styled from "styled-components";
function Layout({ children, final, round }) {
  return (
    <StyledLayout>
      <StyledHeader>
        <h1>지브리 애니메이션 월드컵</h1>
        <h2>
          {final} {round}
        </h2>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </StyledLayout>
  );
}

export default Layout;

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: salmon;
`;

const StyledMain = styled.main`
  width: 100%;
  padding: 2rem 0;
`;
