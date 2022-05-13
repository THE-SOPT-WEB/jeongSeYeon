import React from "react";
import Pub from "./Pub";
import styled from "styled-components";
function Result({ data, isRegionBase }) {
  return (
    <StyledResult>
      {data.length === 0 ? (
        <StyledNoResult>결과 없음...</StyledNoResult>
      ) : (
        data?.map(({ id, place_name, phone, road_address_name, distance }) => (
          <Pub
            key={id}
            name={place_name}
            phone={phone}
            rest={isRegionBase ? road_address_name : `${distance}m`}
          />
        ))
      )}
    </StyledResult>
  );
}

export default Result;

const StyledResult = styled.section`
  width: 100%;
  overflow-y: scroll;
`;

const StyledNoResult = styled.div`
  text-align: center;
`;
