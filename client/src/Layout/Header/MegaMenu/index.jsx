import React from 'react';
import {
  HeaderMegaMenu,
  MegaMenuYearSort,
  MegaMenuList,
  Year,
  ListSectionOne,
  ListSectionTwo,
  ListLink,
} from './styles';

const MegaMenu = ({ open }) => {
  return (
    <HeaderMegaMenu open={open}>
      <MegaMenuYearSort>
        <Year>2020</Year>
        <Year>2019</Year>
        <Year>2018</Year>
        <Year>2017</Year>
      </MegaMenuYearSort>
      <MegaMenuList>
        <ListSectionOne>
          <ListLink>All movie</ListLink>
          <ListLink>Action</ListLink>
          <ListLink>Adventure</ListLink>
        </ListSectionOne>
        <ListSectionTwo>
          <ListLink>Horror</ListLink>
          <ListLink>Mystery</ListLink>
          <ListLink>Thriller</ListLink>
        </ListSectionTwo>
      </MegaMenuList>
    </HeaderMegaMenu>
  );
};

export default MegaMenu;
