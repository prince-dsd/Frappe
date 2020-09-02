import React, { useState } from "react";
import {
  HeaderProfileWrapper,
  HeaderLogin,
  HeaderSearchIcon,
  SearchButton,
  SearchIcon,
  HeaderSign,
  HeaderLoginBtn,
  LoginLock,
} from "./HeaderProfile.styles";
//Components
import HeaderForm from "../HeaderForm/HeaderForm.component";

const HeaderProfile = ({ search, setSearch }) => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderProfileWrapper>
      <HeaderSearchIcon>
        <SearchButton onClick={() => setSearch(!search)}>
          <SearchIcon />
        </SearchButton>
      </HeaderSearchIcon>
      <HeaderLogin>
        <HeaderSign>Sign up</HeaderSign>
        <HeaderLoginBtn open={open} onClick={() => setOpen(!open)}>
          <LoginLock />
          Login
        </HeaderLoginBtn>
      </HeaderLogin>
      <HeaderForm open={open} setOpen={setOpen} />
    </HeaderProfileWrapper>
  );
};

export default HeaderProfile;
