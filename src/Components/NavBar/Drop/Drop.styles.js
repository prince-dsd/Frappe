import styled from "styled-components";

export const HeaderDrop = styled.div`
  display: block;

  position: absolute;
  top: 100%;
  z-index: 3;
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  background-color: #14151d;
  opacity: ${({ open }) => (open ? 1 : 0)};

  transition: 0.4s ease;
  &:last-child {
    border-bottom: none;
    z-index: 5;
  }

  @media (min-width: 360px) {
    left: 0;
    right: 0;
    padding: 0 25px;
    margin-top: 92px;
  }
  @media (min-width: 1200px) {
    left: 190px;
    right: auto;
    width: 230px;
    box-shadow: 0 3px 32px 0 rgba(0, 0, 0, 0.32);
    padding: 0 20px;
    margin-top: 0;
  }
`;
export const DropLink = styled.a`
  width: 100%;
  line-height: 46px;
  font-size: 15px;
  color: #fff;
  border-bottom: 1px solid #1b1c26;
  display: block;
  padding-left: 20px;
  position: relative;
  transition: 0.4s ease;
  text-decoration: none;
  background-color: transparent;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 5px;
    height: 5px;
    border: 1px solid #e50914;
    border-radius: 50%;
    left: 1px;
    top: 50%;
    margin-top: -2px;
  }
`;
