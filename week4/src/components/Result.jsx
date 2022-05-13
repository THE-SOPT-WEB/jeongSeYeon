import React from "react";
import Pub from "./Pub";
import styled from "styled-components";
function Result({ data, isRegionBase }) {
  return (
    <StyledResult>
      {data?.map(({ id, place_name, phone, road_address_name, distance }) => (
        <Pub
          key={id}
          name={place_name}
          phone={phone}
          rest={isRegionBase ? distance : road_address_name}
        />
      ))}
    </StyledResult>
  );
}

export default Result;

const StyledResult = styled.section`
  width: 100%;
  overflow-y: scroll;
`;
