import styled from 'styled-components';
import { ThumbsUp } from '@styled-icons/fa-solid/ThumbsUp';
import { ThumbsDown } from '@styled-icons/fa-solid/ThumbsDown';
import { RightArrow } from '@styled-icons/boxicons-solid/RightArrow';
import { PieChart } from '@styled-icons/boxicons-solid/PieChart';
import { CommentDetail } from '@styled-icons/boxicons-solid/CommentDetail';

export const GridItemWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;

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
  height: 284px;
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
  height: auto;
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
    content: '';
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
export const PopOver = styled.div`
  position: absolute;
  top: 35px;
  bottom: 35px;
  left: 100%;
  margin-left: -15px;
  width: 0;
  background-color: #171920;
  padding: 25px 0;
  z-index: 1;
  transition: 0.2s ease;
  display: block;
  overflow: hidden;
  @media (min-width: 360px) {
    display: none;
  }
  @media (min-width: 1200px) {
    display: block;
    ${GridItemWrapper}:hover & {
      display: block;
      width: 540px;
      padding: 25px 30px;
    }
    ${GridItemWrapper}:nth-child(6n+4)  & {
      left: auto;
      margin-left: 0;
      right: 100%;
      margin-right: -15px;
    }
    ${GridItemWrapper}:nth-child(6n+5)  & {
      left: auto;
      margin-left: 0;
      right: 100%;
      margin-right: -15px;
    }
    ${GridItemWrapper}:nth-child(6n+6)  & {
      left: auto;
      margin-left: 0;
      right: 100%;
      margin-right: -15px;
    }
  }
`;
export const PopTitle = styled.h2`
  font-size: 26px;
  line-height: 26px;
  color: #fff;
  font-weight: normal;
  margin-bottom: 15px;
`;
export const TitleLink = styled.a`
  color: #fff;
  transition: 0.4s ease;
  text-decoration: none;
  background-color: transparent;
`;
export const PopInfo = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
`;

export const PopQuality = styled.li`
  font-size: 12px;
  color: #b8bcc3;
  border: 1px solid #282b38;
  text-transform: uppercase;
  border-radius: 2px;
  height: 22px;
  line-height: 18px;
  text-align: center;
  display: block;
  padding: 0 10px;
  margin-right: 15px;
`;
export const QualityLink = styled.a`
  transition: 0.4s ease;
  color: #e50914;
  text-decoration: none;
  background-color: transparent;
`;
export const PopStats = styled.li`
  font-size: 14px;
  color: #fff;
  margin-left: 6px;
  margin-right: 6px;
  position: relative;
  white-space: pre;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const PopStatsIcon = styled(PieChart)`
  fill: #eee;
  width: 16px;
  height: 15px;
`;
export const PopStatsComment = styled(CommentDetail)`
  fill: #eee;
  width: 16px;
  height: 16px;
`;
export const PopCat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;
`;

export const PopCategory = styled.a`
  display: flex;
  justify-content: center;
  font-size: 12px;
  align-items: center;
  background-color: rgba(26, 28, 39, 0.82);
  height: 34px;
  width: auto;
  min-width: 46px;
  border-radius: 16px;
  padding: 0 15px;
  margin-right: 15px;
  font-size: 15px;
  text-transform: uppercase;
  color: #b8bcc3;
  letter-spacing: 0.2px;
  transition: 0.4s ease;
  text-decoration: none;
`;
export const PopText = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: #c7c7c7;
  margin: 20px 0 0 0;
  display: block;
  position: relative;
  height: 100px;
  overflow: hidden;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 50px;
    pointer-events: none;
    background-image: -webkit-linear-gradient(bottom, #171920 0%, rgba(23, 35, 32, 0) 100%);
  }
`;
export const PopImdb = styled.div`
  position: absolute;
  padding-left: 70px;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  right: 30px;
  top: 115px;
  background: url('/imd.svg') no-repeat center left;
`;
export const RateSpan = styled.span`
  display: block;
  color: #fff;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.2px;
`;
export const ImdbSpan = styled.span`
  display: block;
  font-size: 11px;
  color: #9c9c9d;
  letter-spacing: 0.2px;
`;
