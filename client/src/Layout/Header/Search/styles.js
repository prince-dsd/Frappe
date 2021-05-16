import styled from 'styled-components';
import { Close } from '@styled-icons/evaicons-solid/Close';
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline';

export const HeaderSearch = styled.form`
  display: block;
  position: absolute;

  bottom: 16px;
  pointer-events: ${({ search }) => (search ? 'auto' : 'none')};
  height: 50px;
  z-index: 5;
  opacity: ${({ search }) => (search ? 1 : 0)};
  transition: 0.4s ease;

  @media (min-width: 360px) {
    left: 15px;
    right: 15px;
    bottom: 20px;
  }
  @media (min-width: 1200px) {
    left: 300px;
    right: 222px;
    bottom: 16px;
  }
`;
export const SearchInput = styled.input`
  background-color: #16171f;
  width: 100%;
  height: 50px;
  border: none;
  font-size: 14px;
  color: #fff;
  border-radius: 0;
  box-shadow: none;
  overflow: visible;
  @media (min-width: 360px) {
    padding: 0 60px;
  }
  @media (min-width: 1200px) {
    padding: 0 80px 0 60px;
  }
`;
export const FindButton = styled.button`
  width: 70px;
  height: 50px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.4s ease;
  overflow: visible;
`;
export const FindIcon = styled(SearchOutline)`
  margin-top: 1px;
  fill: #fff;
  height: 22px;
  width: 22px;
  transition: fill 0.4s ease;
  overflow: hidden;
`;
export const CloseFind = styled.button`
  width: 45px;
  height: 50px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: #11121a;
  border: none;
  cursor: pointer;
  transition: 0.4s ease;
  overflow: visible;
`;
export const CloseFindIcon = styled(Close)`
  fill: #fff;
  height: 20px;
  width: 20px;
  transition: fill 0.4s ease;
  overflow: hidden;
`;
