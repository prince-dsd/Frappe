import styled from 'styled-components';
import { ArrowLongUp } from '@styled-icons/entypo/ArrowLongUp';

export const FooterWrapper = styled.footer`
  background-color: #0b0c12;
  display: block;
  overflow: hidden;
`;
export const FooterContent = styled.div`
  position: relative;
  @media (min-width: 1200px) {
    width: 1270px;
    padding-right: 80px;
    flex-wrap: nowrap;
    justify-content: flex-end;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
export const FooterLink = styled.a`
  transition: 0.4s ease;
  color: #e50914;
  text-decoration: none;
  background-color: transparent;
`;
export const LogoImage = styled.img.attrs({
  src: '/frappe2.png',
})`
  width: 120px;
  vertical-align: middle;
  border-style: none;
`;
export const FooterLogo = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  @media (min-width: 360px) {
    height: 100px;
    width: 100%;
    padding: 0 40px;
    justify-content: flex-start;
  }

  @media (min-width: 1200px) {
    width: 160px;
    flex: none;
    justify-content: center;
    order: 1;
    height: 100px;
    padding: 0;
  }
`;
export const FooterCounters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (min-width: 360px) {
    background-color: #0f1016;
    height: 80px;
    width: auto;
  }
  @media (min-width: 1200px) {
    width: 425px;
    order: 4;
    border-left: 1px solid #16171d;
    border-right: 1px solid #16171d;
    flex: none;
    height: 100px;
    background-color: #0c0d13;
  }
`;

export const FooterCounter = styled.div`
  margin: 0 10px;
  display: block;
  min-width: 90px;
  min-height: 30px;
  background-color: #14151c;
`;
export const FooterNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: 360px) {
    width: auto;
    height: 70px;
    background-color: #111218;
  }
  @media (min-width: 1200px) {
    width: 425px;
    order: 3;
    flex: none;
    height: 100px;
    background-color: #0c0d13;
  }
`;
export const FooterNavLink = styled.a`
  line-height: 34px;
  font-size: 13px;
  position: relative;
  color: #babdc2;
  text-transform: uppercase;
  margin: 0 25px;
  transition: 0.4s ease;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    height: 2px;
    width: 100%;
    left: 0;
    background-color: #e50914;
    opacity: 0;
    transition: 0.4s ease;
  }
  &:hover {
    &:before {
      opacity: 1;
    }
  }
`;
export const FooterCopyRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 360px) {
    height: 80px;
    background-color: #0f1016;
    padding: 0 35px;
  }
  @media (min-width: 1200px) {
    width: 180px;
    order: 2;
    flex: none;
    height: 100px;
    background-color: #0b0c12;
    padding: 0;
  }
`;
export const CopySpan = styled.span`
  font-size: 15px;
  color: #5f6165;
`;
export const Rights = styled.small`
  font-size: 14px;
  color: #18191f;
`;
export const FooterBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: 12px 18px;
  background-color: #111218;
  border: none;
  cursor: pointer;
  transition: 0.4s ease;
  text-transform: none;
  overflow: visible;

  @media (min-width: 360px) {
    top: 25px;
    right: 15px;
  }
  @media (min-width: 1200px) {
    right: 0;
    top: auto;
    bottom: 25px;
  }
`;
export const GoToTop = styled(ArrowLongUp)`
  fill: #a2a4a9;
  height: 40px;
  width: 20px;
  transition: 0.4s ease;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    fill: #e50914;
  }
`;
