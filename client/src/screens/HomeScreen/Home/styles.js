import styled from 'styled-components';

import { ArrowLeft } from '@styled-icons/bootstrap/ArrowLeft';
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight';

export const HomeWrapper = styled.div`
  position: relative;
  background-color: #0f1016;
  overflow: hidden;
`;
export const HomeBgOwl = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
`;

export const OwlStageOuter = styled.div`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`;
export const OwlStage = styled.div`
  transform: translate3d(-13940px, 0px, 0px);
  transition: all 0s ease 0s;
  width: 55760px;
  position: relative;
  touch-action: manipulation;
`;
export const Container = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 360px) {
    padding: 0;
  }
  @media (min-width: 1200px) {
    max-width: 1300px;
    padding-left: 15px;
    padding-right: 15px;
    height: 500px;
  }
`;
export const ContainerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const HomeNav = styled.div`
  right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 14px;
  position: absolute;
  @media (min-width: 360px) {
    width: 56px;
    top: 40px;
  }
  @media (min-width: 1200px) {
    top: 45px;
    width: 70px;
  }
`;
export const NavButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.4s ease;
  text-decoration: none;
  overflow: visible;
  cursor: pointer;
`;
export const Prev = styled(ArrowLeft)`
  fill: #87898d;
  height: 26px;
  width: 50px;
  fill-rule: evenodd;
  transition: 0.4s ease;
  overflow: hidden;
  cursor: pointer;
`;
export const Next = styled(ArrowRight)`
  fill: #87898d;
  width: 26px;
  height: 50px;
  fill-rule: evenodd;
  transition: 0.4s ease;
  overflow: hidden;
  cursor: pointer;
`;
export const ContainerCol = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
`;
export const ContainerHeader = styled.h1`
  font-weight: normal;
  color: #fff;
  text-transform: uppercase;
  margin-top: 30px;
  letter-spacing: 0.8px;

  @media (min-width: 360px) {
    font-size: 22px;
    line-height: 32px;
    padding: 0 15px;
    & b {
      display: block;
    }
  }
  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 42px;
    padding: 0;
    & b {
      display: inline;
    }
  }
`;
export const HomeSliderWrap = styled.div`
  @media (min-width: 360px) {
    display: none;
  }
  @media (min-width: 1200px) {
    display: block;
    margin-top: 30px;
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    min-height: 1px;
  }
`;

export const HomeSliderRight = styled.div`
  position: relative;

  min-height: 1px;
  margin-top: 30px;
  display: flex;
  @media (min-width: 360px) {
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
  }
  @media (min-width: 1200px) {
    flex: 0 0 50%;
    max-width: 50%;
    width: 100%;
  }
`;
export const SlickLoaded = styled.div`
  display: block;
  width: 100%;
`;
