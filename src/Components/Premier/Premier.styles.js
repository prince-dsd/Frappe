import styled from "styled-components";
import { ArrowThickRight } from "@styled-icons/zondicons/ArrowThickRight";

export const PremierWrapper = styled.section`
  padding: 10px 0 65px;
  background-color: #111218;
  display: block;
`;
export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;
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
export const ColumnLarge = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
`;
export const PremierTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(40, 42, 57, 0.32);
  position: relative;
  @media (min-width: 360px) {
    height: 100px;
    margin-bottom: 40px;
  }
  @media (min-width: 1200px) {
    height: 120px;
    margin-bottom: 50px;
  }
  &:before {
    content: "";
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 1px;
    background-color: #e50914;
  }
`;
export const Title = styled.h2`
  color: #fff;
  font-weight: normal;
  text-transform: uppercase;
  @media (min-width: 360px) {
    margin: 0 15px 0 0;
    font-size: 26px;
  }
  @media (min-width: 768px) {
    font-size: 40px;
    margin: 0 30px 0 0;
  }
`;

export const ComingSoon = styled.a`
  @media (min-wdith: 360px) {
    height: 50px;
    padding: 0 30px;
  }
  @media (min-width: 768px) {
    height: 42px;
    border-radius: 21px;
    padding: 0 25px;
    margin-top: 5px;
  }

  display: flex;
  flex-direction: row;
  color: #88898c;
  justify-content: center;
  align-items: center;
  background-color: #181920;
  transition: 0.4s ease;
  text-decoration: none;
  &:hover {
    background-color: #20212a;
    cursor: pointer;
    color: #fff;
  }
`;
export const PremierSpan = styled.span`
  display: block;

  font-size: 13px;
  text-transform: uppercase;
  margin-right: 15px;
  line-height: 100%;
  transition: 0.4s ease;
  margin-bottom: 2px;
  @media (min-width: 360px) {
    margin-left: 10px;
  }
  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

export const RightArrow = styled(ArrowThickRight)`
  fill: #6b6e72;
  fill-rule: evenodd;
  transition: 0.4s ease;
  overflow: hidden;
  ${ComingSoon}:hover & {
    fill: #e50914;
  }

  @media (min-width: 360px) {
    width: 22px;
    height: 30px;
  }
  @media (min-width: 768px) {
    width: 24px;
    height: 18px;
  }
`;

export const LoadMore = styled.button`
  width: 230px;
  height: 54px;
  display: block;
  margin: 0 auto;
  background-color: #1b1b22;
  color: #79797f;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: 0.4s ease;
  overflow: visible;
  border-radius: 0;
  &:hover {
    color: #e50914;
  }
`;
