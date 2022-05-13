import React from "react";
import styled from "styled-components";

function SearchForm({
  isRegionBase,
  onChangeCheckbox,
  onChangeInput,
  inputValue,
  onSubmit,
}) {
  return (
    <StyledSearchForm>
      <StyledToggleMenu>
        지역 기반으로 검색할까요?{" "}
        <input
          type="checkbox"
          checked={isRegionBase}
          onChange={onChangeCheckbox}
        />
      </StyledToggleMenu>
      <StyledSearchInput
        type="text"
        value={inputValue}
        onChange={onChangeInput}
      />
      <StyledSearchButton
        type="submit"
        onClick={() => onSubmit(inputValue, isRegionBase)}
      >
        검색하기
      </StyledSearchButton>
    </StyledSearchForm>
  );
}

export default SearchForm;

const StyledSearchForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
`;

const StyledToggleMenu = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSearchInput = styled.input`
  margin: 1rem 0;
`;

const StyledSearchButton = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;
