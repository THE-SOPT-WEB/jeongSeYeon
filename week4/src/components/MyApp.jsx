import React, { useState } from "react";
import styled from "styled-components";
import useFetchPubList from "../utils/hook/useFetchPubList";
import Result from "./Result";
import SearchForm from "./SearchForm";
function MyApp() {
  const [searchResult, isLoading, api] = useFetchPubList();
  const [searchForm, setSearchForm] = useState({
    isRegionBase: false,
    keyword: "",
  });

  const onSubmit = (keyword, isRegionBase) => {
    api.fetch(keyword, isRegionBase);
    setSearchForm({ keyword, isRegionBase });
  };

  return (
    <StyledMyApp>
      <StyledHeader>
        <h1>동네 맥주집 찾기</h1>
      </StyledHeader>
      <SearchForm onSubmit={onSubmit} />
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <Result data={searchResult} isRegionBase={searchForm.isRegionBase} />
      )}
    </StyledMyApp>
  );
}

export default MyApp;

const StyledMyApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 100vh;
  margin: 0 auto;
  border: 1px solid black;

  & > *:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;
const StyledHeader = styled.header`
  width: 100%;
  text-align: center;
`;
