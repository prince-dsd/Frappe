import styled from "styled-components";

import { ThumbsUp } from "@styled-icons/fa-solid/ThumbsUp";
import { ThumbsDown } from "@styled-icons/fa-solid/ThumbsDown";
import { RightArrow } from "@styled-icons/boxicons-solid/RightArrow";

export const GridItemWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  &:nth-child(n + 7) {
    display: none;
  }
  @media (min-width: 360px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 576px) {
    flex: 0 0 33.3%;
    max-width: 33.3%;
  }
  @media (min-width: 768px) {
    flex: 0 0 25%;
    max-width: 25%;
  }

  @media (min-width: 1200px) {
    flex: 0 0 16.6667%;
    max-width: 16.6667%;
  }
`;
export const Movie = styled.div`
  display: block;
  position: relative;
  margin-bottom: 35px;
  overflow: hidden;
`;
export const MovieCover = styled.div`
  height: 290px;
  position: relative;
  overflow: hidden;
`;
export const MovieImage = styled.a`
  transition: 0.4s ease;
  color: #e50914;
  text-decoration: none;
  background-color: transparent;
`;

export const CoverImage = styled.img.attrs(({ poster_path }) => ({
  src: `https://image.tmdb.org/t/p/w500${poster_path}`,
}))`
  width: 100%;
  height: 290px;
  min-height: 100%;
  vertical-align: middle;
  border-style: none;
`;

export const MovieRate = styled.div`
  position: absolute;
  display: block;
  top: 10px;
  left: 0;
  height: 30px;
  width: 50px;
`;

export const MovieRating = styled.span`
  background-color: #0cb457;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 50px;
  font-size: 14px;
  color: #ffecee;
  left: 0;
  top: 0;
  position: absolute;
  transition: 0.4s ease;
`;

export const RatingLayer = styled.span``;
export const RatingType = styled.span``;
export const MovieEstimate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100px;
  height: 30px;
  left: -100px;
  top: 0;
  background-color: rgba(15, 16, 22, 0.97);
  transition: 0.4s ease;

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 1px;
    height: 10px;
    background-color: #1d1e24;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  ${MovieRate}:hover & {
    left: 0;
  }
`;
export const FilmEstDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Plus = styled.a`
  transition: 0.4s ease;
  color: #fdd200;
  text-decoration: none;
  background-color: transparent;
`;

export const PlusButton = styled.button`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  transition: 0.4s ease;
  text-transform: none;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-radius: 0;
  border: none;
`;
export const PlusIcon = styled(ThumbsUp)`
  color: #0cb457;

  width: 16px;
  height: 16px;
  overflow: hidden;
  border: none;
`;
export const PlusSpan = styled.span`
  font-size: 14px;
  color: #fff;
  padding: 0 10px;
  margin: 0 10px;
`;
export const RatingSpan = styled.span``;
export const InnerSpan = styled.span``;
export const Minus = styled.a`
  transition: 0.4s ease;
  color: #fdd200;
  text-decoration: none;
  background-color: transparent;
`;
export const MinusButton = styled.button`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  transition: 0.4s ease;
  text-transform: none;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-radius: 0;
  border: none;
`;
export const MinusIcon = styled(ThumbsDown)`
  color: #8a212f;

  width: 16px;
  height: 16px;
  overflow: hidden;
  border: none;
`;

export const MovieTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  min-height: 52px;
  position: relative;
  flex-wrap: wrap;
  padding: 0 10px;
`;
export const WatchMovie = styled.a`
  font-size: 14px;
  letter-spacing: 0.3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #171920;
  text-transform: uppercase;
  height: 52px;
  left: 0;
  width: 100%;
  background-color: #e50914;
  position: absolute;
  top: 100%;
  font-weight: bold;
  transition: 0.4s ease;
  text-decoration: none;

  ${GridItemWrapper}:hover & {
    transform: translateY(-52px);
  }
`;
export const WatchSpan = styled.span`
  margin-left: 5px;
`;
export const WatchArrow = styled(RightArrow)`
  width: 18px;
  height: 20px;
  fill: #171920;

  fill-rule: evenodd;
  margin-left: 10px;
  overflow: hidden;
`;
