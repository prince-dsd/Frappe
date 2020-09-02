import styled from "styled-components";
import { ArrowBoldLeft } from "@styled-icons/entypo/ArrowBoldLeft";
import { ArrowBoldRight } from "@styled-icons/entypo/ArrowBoldRight";
export const PaginationWrapper = styled.div`
  margin-bottom: 65px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  &:after {
    clear: both;
    display: block;
    content: "";
  }
`;
export const PrevPage = styled.a`
  text-decoration: none;
  transition: 0.4s ease;
  color: #e50914;
  background-color: transparent;
`;
export const PagePrev = styled.div`
  margin-right: 10px;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  min-width: 50px;
  height: 50px;
  color: #fff;
  font-size: 15px;
  background-color: #14151d;
  margin: 0 1px;
  &:hover {
    background-color: #20212a;
    cursor: pointer;
  }
`;
export const PrevIcon = styled(ArrowBoldLeft)`
  height: 22px;
  width: 50px;
  fill: #6b6e72;
  fill-rule: evenodd;
  transition: 0.4s ease;
  overflow: hidden;

  ${PagePrev}:hover & {
    fill: #e50914;
    cursor: pointer;
  }
`;
export const PrevSpan = styled.span`
  margin-left: 10px;
  font-size: 13px;
  color: #a3a6ab;
  text-transform: uppercase;
  transition: 0.4s ease;

  @media (min-width: 360px) {
    display: none;
  }
  @media (min-width: 1200px) {
    display: block;
  }
`;
export const PaginationPage = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  height: 50px;
  color: #fff;
  font-size: 15px;
  background-color: #14151d;
  margin: 0 1px;
  @media (min-width: 360px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: flex;
    width: auto;
    padding: 0 15px;
    min-width: 50px;
  }
`;

export const PageNLink = styled.a`
  display: flex;
  margin-right: 20px;
  color: ${({ active }) => (active ? "#e50914" : "#56585d")};
  text-decoration: none;
  transition: 0.4s ease;
  background-color: transparent;
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;
export const PageSkip = styled.span`
  color: #e50914;
  display: flex;
  margin-right: 20px;
`;
export const NextPage = styled.a`
  text-decoration: none;
  transition: 0.4s ease;
  color: #e50914;
  background-color: transparent;
`;
export const PageNext = styled.div`
  margin-left: 10px;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  min-width: 50px;
  height: 50px;
  color: #fff;
  font-size: 15px;
  background-color: #14151d;
  margin: 0 1px;
  &:hover {
    background-color: #20212a;
    cursor: pointer;
  }
`;
export const NextSpan = styled.span`
  margin-right: 10px;

  font-size: 13px;
  color: #a3a6ab;
  text-transform: uppercase;
  transition: 0.4s ease;

  @media (min-width: 360px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: block;
  }
`;
export const NextIcon = styled(ArrowBoldRight)`
  width: 50px;
  height: 22px;
  fill: #6b6e72;
  fill-rule: evenodd;
  transition: 0.4s ease;
  overflow: hidden;

  ${PageNext}:hover & {
    fill: #e50914;
    cursor: pointer;
  }
`;
