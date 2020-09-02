import React from "react";
import {
  HeaderSearch,
  SearchInput,
  FindButton,
  FindIcon,
  CloseFind,
  CloseFindIcon,
} from "./Search.styles";

const Search = ({ search, setSearch }) => {
  const closeByIcon = (e) => {
    e.preventDefault();
    setSearch(!search);
  };
  return (
    <HeaderSearch search={search}>
      <SearchInput />
      <FindButton>
        <FindIcon />
      </FindButton>
      <CloseFind onClick={(e) => closeByIcon(e)}>
        <CloseFindIcon />
      </CloseFind>
    </HeaderSearch>
  );
};
export default Search;
