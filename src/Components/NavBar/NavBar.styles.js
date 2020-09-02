import styled from "styled-components";

export const Header = styled.header`
  height: 90px;
  background-color: #0e0f16;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.4s ease;
  z-index: 99;
  display: block;
  box-sizing: inherit;

  @media (min-width: 360px) {
    height: 180px;
  }
  @media (min-width: 1200px) {
    height: 90px;
  }
`;
export const HeaderContent = styled.div`
  @media (min-width: 1200px) {
    width: 1300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    position: relative;
    background-color: #0e0f16;
  }
`;
