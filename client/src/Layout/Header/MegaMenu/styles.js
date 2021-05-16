import styled from 'styled-components';

export const HeaderMegaMenu = styled.div`
  left: 0;
  width: 670px;
  right: auto;
  flex-direction: row;
  box-shadow: 0 3px 54px 0 rgba(0, 0, 0, 0.14);
  position: absolute;
  top: 100%;
  background-color: #181921;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 4;
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: 0.4s ease;
`;
export const MegaMenuYearSort = styled.div`
  width: 270px;
  padding: 25px 0 15px 25px;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

  &:before {
    content: 'Sort by year:';
    color: #aaadb2;
    font-size: 15px;
    position: relative;
    display: block;
    margin-bottom: 15px;
    width: 100%;
  }
`;

export const Year = styled.a`
  width: 50px;
  height: 28px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #282b38;
  font-size: 12px;
  color: #aaadb2;
  margin-bottom: 10px;
  margin-right: 10px;

  border-radius: 2px;
`;
export const MegaMenuList = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 25px;
  background-color: #16171f;
`;
export const ListSectionOne = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ListLink = styled.a`
  font-size: 15px;
  color: #999ca1;
  margin-bottom: 10px;
  position: relative;
  transition: 0.4s ease;
  text-decoration: none;
  background-color: transparent;
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 4px;
    height: 4px;

    border-radius: 50%;
    background-color: #e50914;
    left: 0;
    top: 50%;
    margin-top: -2px;

    transition: 0.4s ease;
    opacity: 0;
  }
`;
export const ListSectionTwo = styled.div`
  border-left: 1px solid #1f212c;
  padding-left: 25px;
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
