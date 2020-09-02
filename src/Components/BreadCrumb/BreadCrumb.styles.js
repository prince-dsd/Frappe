import styled from "styled-components";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
export const BreadCrumbWrapper = styled.div`
  display: block;
  width: 100%;

  background: linear-gradient(
    to right,
    #0a0b10 0%,
    #0a0b10 50%,
    #050608 51%,
    #050608 100%
  );
`;
export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1200px) {
    max-width: 1300px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Column = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

export const BreadCrumContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #0a0b10;
`;

export const BreadCrumbList = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding-left: 35px;

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 18px;
    height: 22px;
    left: 0;
    top: 50%;
    margin-top: -11px;
    background: url("/breadcrumb.svg") no-repeat center;
  }
`;
export const Speedbar = styled.span`
  font-size: 16px;
  color: #a0a6b6;
  transition: 0.4s ease;
`;
export const ItemScope = styled.span`
  font-size: 16px;
  color: #a0a6b6;
  transition: 0.4s ease;
`;
export const ItemUrl = styled.a`
  font-size: 16px;
  position: relative;
  color: #646673;
  transition: 0.4s ease;
  text-decoration: none;
  background-color: transparent;
`;
export const ItemTitle = styled.span`
  color: #646673;
  font-size: 16px;
  transition: 0.4s ease;
`;
export const RightArrow = styled.i`
  padding: 0 10px;
  font-style: normal;
  color: #27282d;
  font-weight: bold;
`;
export const BreadCrumbBack = styled.a`
  width: 130px;
  height: 80px;
  background-color: #050608;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease;
  text-decoration: none;
`;
export const BackIcon = styled(ArrowBack)`
  fill: #87898d;
  fill-rule: evenodd;
  width: 20px;
  height: 14px;
  transition: 0.4s ease;
  overflow: hidden;
  &:hover {
    fill: #22b4bb;
  }
`;
export const BackSpan = styled.span`
  display: flex;
  color: #dedede;
  font-size: 15px;
  text-transform: uppercase;
  margin-left: 15px;
  margin-top: -2px;
`;
