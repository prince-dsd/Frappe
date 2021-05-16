import React, { useState } from 'react';
import { Header, HeaderContent } from './styles';
//Components
import Search from './Search';
import Navigation from './Navigation';
import HeaderProfile from './HeaderProfile';
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
