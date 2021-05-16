import styled from 'styled-components';

export const HeaderNav = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  height: 90px;
  width: 100%;
  position: relative;
  @media (min-width: 360px) {
    background-color: #11121a;
    justify-content: space-between;
  }
  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
`;
export const HeaderLogo = styled.a`
  transition: 0.4s ease;
  color: #e50914;
  text-decoration: none;
  @media (min-width: 360px) {
    width: 120px;
    margin-left: 15px;
    background-color: transparent;
  }
  @media (min-width: 1200px) {
    width: 189px;
    height: 90px;
    margin-left: 0;
    background-color: #11121a;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Logo = styled.img.attrs({
  src: '/frappe.png',
})`
  @media (min-width: 360px) {
    vertical-align: middle;
    border-style: none;
    width: 120px;
  }
  @media (min-width: 1200px) {
    text-shadow: none;
    width: 120px;
    border-style: none;
  }
`;

export const HeaderMenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  background-color: #16171f;
  position: relative;

  border: none;
  cursor: pointer;
  transition: 0.4s ease;
  text-decoration: none;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-radius: 0;
  text-transform: none;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 20px;
    height: 2px;
    margin-right: -10px;
    background-color: #babdc2;
    right: 50%;
    top: 50%;
    transition: 0.4s ease;
    margin-top: -4px;
    ${({ open }) => (open ? 'transform : rotate(-45deg); margin-top: 0; height : 3px' : '')};
  }
  &:after {
    margin-top: 3px;
    width: 14px;
    content: '';
    position: absolute;
    display: block;
    height: 2px;
    background-color: #babdc2;
    right: 50%;
    margin-right: -10px;
    border-radius: 4px;
    top: 50%;
    ${({ open }) => (open ? 'transform : rotate(45deg); margin-top : 0; width:20px; height : 3px' : '')};

    transition: 0.4s ease;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  transition: 0.4s ease;
  align-items: center;
  flex-direction: row;
  z-index: 3;
  @media (min-width: 360px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 0 15px;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #14151d;
    pointer-events: none;
    opacity: ${({ open }) => (open ? 1 : 0)};
  }
  @media (min-width: 1200px) {
    position: relative;
    flex-wrap: nowrap;
    height: 90px;
    justify-content: flex-start;
    top: 0;
    left: auto;
    right: auto;
    padding: 0 0 0 20px;
    background-color: transparent;
    pointer-events: auto;
    opacity: 1;
  }
`;

export const MenuLink = styled.a`
  font-size: 14px;
  text-transform: uppercase;
  color: #babdc2;
  position: relative;
  transition: 0.4s ease;
  text-decoration: none;
  background-color: transparent;
  @media (min-width: 360px) {
    flex: 1 1 50%;
    line-height: 46px;
    padding: 0 10px;
  }
  @media (min-width: 1200px) {
    margin: 0 23px;
    flex: none;
    line-height: 90px;
    cursor: pointer;
  }

  &:before {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    height: 2px;
    right: 0;
    left: 0;
    background-color: #1b1c26;
    opacity: 0;
    transition: 0.4s ease;

    @media (min-width: 360px) {
      left: 10px;
      right: 10px;
      height: 1px;
      opacity: 1;
    }
    @media (min-width: 1200px) {
      left: 0;
      right: 0;
      height: 2px;
      opacity: 0;
    }
  }
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    width: 21px;
    height: 8px;
    transition: 0.4s ease;
    opacity: 0;

    @media (min-width: 360px) {
      left: 0;
    }
    @media (min-width: 1200px) {
      left: 50%;
      margin-left: -10px;
    }
  }
`;
