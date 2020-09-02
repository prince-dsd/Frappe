import React, { useState } from "react";
import { Header, HeaderContent } from "./NavBar.styles";
//Components
import Search from "./Search/Search.component";
import Navigation from "./Navigation/Navigation.component";
import HeaderProfile from "./HeaderProfile/HeaderProfile.component";
const NavBar = () => {
  const [search, setSearch] = useState(false);

  return (
    <Header>
      <HeaderContent>
        <Navigation />
        <HeaderProfile search={search} setSearch={setSearch} />
        <Search search={search} setSearch={setSearch} />
      </HeaderContent>
    </Header>
  );
};

export default NavBar;
