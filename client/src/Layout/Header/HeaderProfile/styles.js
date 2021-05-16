import styled from 'styled-components';
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline';
import { LockAlt } from '@styled-icons/boxicons-regular/LockAlt';

export const HeaderProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: auto;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  position: relative;
  @media (min-width: 360px) {
    width: 100%;
    background-color: #0e0f16;
    padding: 0 15px;
  }
  @media (min-width: 1200px) {
    width: auto;
    background-color: transparent;
    padding: 0;
  }
`;

export const HeaderSearchIcon = styled.div`
  display: flex;
  position: relative;
  height: 40px;
  justify-content: center;
  align-items: center;
  @media (min-width: 1200px) {
    margin-right: 23px;
    padding-right: 23px;
    border-right: 1px solid #191a24;
  }
`;
export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  text-transform: none;
  transition: 0.4s ease;
  font-family: inherit;
  font-size: inherit;
  overflow: visible;
  line-height: inherit;
  cursor: pointer;
  border-radius: 0;
`;

export const SearchIcon = styled(SearchOutline)`
  fill: #fff;
  transition: 0.4s ease;
  width: 22px;
  height: 22px;
  margin-top: 7px;
  overflow: hidden;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`;

export const HeaderLogin = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: 0.4s ease;
  &:before {
    left: 100%;
    content: '';
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    background-color: transparent;
    width: 15px;
    transition: 0.4s ease;
    pointer-events: none;
    opacity: 0;
  }
  &:after {
    right: 100%;
    content: '';
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    background-color: transparent;
    width: 15px;
    transition: 0.4s ease;
    pointer-events: none;
    opacity: 0;
  }
`;

export const HeaderSign = styled.a`
  margin-right: 15px;
  font-size: 15px;
  color: #e50914;
  width: 80px;
  height: 34px;
  padding-top: 4px;
  padding-left: 14px;
  border-radius: 16px;
  border: 1px solid #1c1d22;
  transition: 0.4s ease;
  text-decoration: none;
  background-color: transparent;
  text-transform: uppercase;
  cursor: pointer;
`;
export const HeaderLoginBtn = styled.button`
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90px;
  color: #babdc2;
  font-size: 15px;
  position: relative;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  transition: 0.4s ease;
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 2px;
    background-color: #e50914;
    -webkit-transition: 0.4s ease;
    -moz-transition: 0.4s ease;
    transition: 0.4s ease;
    opacity: ${({ open }) => (open ? 1 : 0)};
  }
`;
export const LoginLock = styled(LockAlt)`
  fill: #babdc2;
  width: 22px;
  height: 22px;
  margin-right: 13px;
  transition: 0.4s ease;
  overflow: hidden;
`;
