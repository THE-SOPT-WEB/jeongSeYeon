import React from "react";
import styled from "styled-components";
function Pub({ name, phone, rest }) {
  return (
    <StyledPub>
      <StyledName>{name}</StyledName>
      <div>
        <StyledPhone>{phone}</StyledPhone>
        <StyledRest>{rest}</StyledRest>
      </div>
    </StyledPub>
  );
}

export default Pub;

const StyledPub = styled.article`
  margin: 1rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledName = styled.div`
  padding: 0.5rem 0;
`;
const StyledPhone = styled.span``;
const StyledRest = styled.span``;
