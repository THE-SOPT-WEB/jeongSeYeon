import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import { ani } from "../ani";

function Awards() {
  const { id } = useParams();
  const [[winner]] = useState(ani.filter((each) => each.id === +id));

  const onClickToCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => alert("복사되었습니다!"));
  };

  return (
    <Layout final={`우승 ${winner?.name || ""}`}>
      {
        <>
          <StyledWrapper>
            <img src="/assets/crown.png" alt="crown" />
            <StyledImg src={winner?.src} alt={winner?.name} />
          </StyledWrapper>
          <StyledButtonsWrapper>
            <a href="/">
              <StyledButton>다시하기</StyledButton>
            </a>
            <StyledButton onClick={onClickToCopy}>공유하기</StyledButton>
          </StyledButtonsWrapper>
        </>
      }
    </Layout>
  );
}

export default Awards;

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  & > img:first-child {
    width: 10rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const StyledImg = styled.img`
  width: 50%;
  aspect-ratio: 16 / 9;
  padding: 0.5rem;
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
`;

const StyledButton = styled.button`
  border: none;
  padding: 2rem 5rem;
  margin: 0 2rem;
  background-color: salmon;
  border-radius: 1rem;
  font-weight: bold;
  cursor: pointer;
`;
