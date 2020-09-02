import React from "react";
import {
  FooterWrapper,
  FooterContent,
  FooterLogo,
  FooterCounters,
  FooterNav,
  FooterCopyRight,
  FooterBtn,
  FooterLink,
  LogoImage,
  FooterCounter,
  FooterNavLink,
  CopySpan,
  Rights,
  GoToTop,
} from "./Footer.styles";

const Footer = ({ scrollToRef, reach }) => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLogo>
          <FooterLink>
            <LogoImage />
          </FooterLink>
        </FooterLogo>
        <FooterCounters>
          <FooterCounter></FooterCounter>
          <FooterCounter></FooterCounter>
          <FooterCounter></FooterCounter>
        </FooterCounters>
        <FooterNav>
          <FooterNavLink>Movies</FooterNavLink>
          <FooterNavLink>DMCA</FooterNavLink>
          <FooterNavLink>Contact us</FooterNavLink>
        </FooterNav>
        <FooterCopyRight>
          <CopySpan>© 2020 FireWatch</CopySpan>
          <Rights>All rights reserved</Rights>
        </FooterCopyRight>
        <FooterBtn>
          <GoToTop onClick={() => scrollToRef(reach)} />
        </FooterBtn>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
