import React from "react";
import { HeaderDrop, DropLink } from "./Drop.styles";
const Drop = ({ open }) => {
  return (
    <HeaderDrop open={open}>
      <DropLink>Rules</DropLink>
      <DropLink>About</DropLink>
      <DropLink>Help</DropLink>
      <DropLink>DMCA</DropLink>
    </HeaderDrop>
  );
};

export default Drop;
