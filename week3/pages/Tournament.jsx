import React, { useEffect, useState } from "react";
import { ani } from "../ani";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import { useNavigate } from "react-router-dom";
import { css } from "styled-components";

function Tournament() {
  const nav = useNavigate();
  const [tournament, setTournament] = useState([
    ...ani.sort(() => Math.random() - 0.5),
  ]);
  const [final, setFinal] = useState(tournament.length);
  const [round, setRound] = useState(1);
  const [winners, setWinners] = useState([]);
  const [animationId, setAnimationId] = useState();

  const onClick = async (winner) => {
    if (round < final / 2) setRound((prev) => ++prev);
    setAnimationId(winner.id);
    setTimeout(() => {
      setTournament([...tournament.slice(2)]);
      setWinners((prev) => [...prev, winner]);
    }, 500);
  };

  useEffect(() => {
    //결승이고 승자가 한 명 있다면 종료
    if (final === 2 && winners.length === 1) {
      const [winner] = winners;
      nav(`/awards/${winner.id}`);
      //결승이 아니고 우승자가 충족되었다면 다음 경기로 진출
    } else if (winners.length === final / 2) {
      setTournament(winners);
      setFinal(winners.length);
      setWinners([]);
    }
  }, [winners, final]);

  useEffect(() => {
    setAnimationId();
  }, [tournament]);

  useEffect(() => {
    setRound(1);
  }, [final]);

  return (
    <Layout
      final={final === 2 ? "결승" : `${final}강`}
      round={final !== 2 && `${round} / ${final / 2}`}
    >
      <StyledTournament>
        {tournament.slice(0, 2).map(({ src, name, id }) => (
          <StyledImgWrapper key={id} isWinner={animationId === id}>
            <StyledImg
              src={src}
              alt={name}
              onClick={() => onClick({ src, name, id })}
            />
            <div>{name}</div>
          </StyledImgWrapper>
        ))}
        <img src="/assets/vs.png" alt="vs" />
      </StyledTournament>
    </Layout>
  );
}

export default Tournament;

const StyledTournament = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  & > img:last-child {
    position: absolute;
    width: 10rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledImgWrapper = styled.div`
  width: 50%;
  position: relative;
  padding: 0.5rem;
  display: flex;
  cursor: pointer;
  transition: transform 0.5s;

  & > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: salmon;
    font-size: 3rem;
    font-weight: bold;
  }

  ${({ isWinner }) =>
    isWinner &&
    css`
      transform: translateY(-2rem);
    `}
`;
const StyledImg = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
`;
