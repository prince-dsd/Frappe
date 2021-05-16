import styled from 'styled-components';
import { PieChart } from '@styled-icons/boxicons-solid/PieChart';
import { CommentDetail } from '@styled-icons/boxicons-solid/CommentDetail';

export const SlideItemWrap = styled.div``;
export const HomeSlide = styled.div`
  height: 290px;
  position: relative;
  padding-right: 50px;
  padding-left: 225px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const HomeSlideCover = styled.div`
  width: 190px;
  position: absolute;
  display: block;
  left: 0;
  top: 0;
`;
export const CoverImage = styled.img.attrs(({ poster_path }) => ({
  src: `https://image.tmdb.org/t/p/w500${poster_path}`,
}))`
  display: block;
  width: 100%;
  border-style: none;
`;
export const HomeSlidePLay = styled.a`
  position: absolute;
  display: block;
  width: 90px;
  height: 90px;
  top: 50%;
  left: 50%;
  margin: -45px 0 0 -45px;
  border-radius: 50%;
  background: url('/play.svg') no-repeat center left 33px rgba(10, 11, 16, 0.9);
  opacity: 0;
  transition: 0.4s ease;
  text-decoration: none;
  cursor: pointer;
  ${CoverImage}:hover + &, &:hover {
    opacity: 1;
    background-color: #0a0b10;
  }
`;
export const HomeSlideTitle = styled.h2`
  font-size: 30px;

  line-height: 34px;
  color: #fff;
  font-weight: normal;
  margin-bottom: 12px;
  margin-top: -8px;
  padding-right: 50px;
`;

export const HomeSlideInfo = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: 22px;
  list-style: none;
`;
export const Quality = styled.li`
  font-size: 12px;
  color: #b8bcc3;
  text-transform: uppercase;
  border: 1px solid #282b38;
  border-radius: 2px;
  min-width: 36px;
  height: 22px;
  padding: 0 5px;
  line-height: 18px;
  text-align: center;
  display: block;
`;
export const QualityIcon = styled.a`
  transition: 0.4s ease;
  color: #e50914;
  text-decoration: none;
  background-color: transparent;
`;
export const Stats = styled.li`
  font-size: 14px;
  color: #fff;
  font-family: 'univiapro-regular-webfont';
  margin-left: 8px;
  margin-right: 8px;
  position: relative;
  white-space: pre;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const StatsIconPrimary = styled(PieChart)`
  fill: #eee;
  width: 18px;
  height: 18px;
`;
export const StatsComment = styled(CommentDetail)`
  fill: #eee;
  width: 18px;
  height: 18px;
`;
export const HomeSlideCat = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;
  min-height: 34px;
`;

export const Category = styled.a`
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
export const HomeSlideText = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: #c7c7c7;
  margin: 20px 0 0 0;
  display: block;
  position: relative;

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
    background-image: -webkit-linear-gradient(bottom, #0f1016 0%, rgba(23, 35, 32, 0) 100%);
  }
`;
export const HomeSlideRating = styled.span`
  display: flex;

  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 2px solid transparent;
  color: #fff;
  font-size: 16px;

  top: 0;
  right: 50px;
  position: absolute;
  justify-content: center;
  align-items: center;
  border-color: #0cb457;
  background-color: rgba(12, 180, 87, 0.09);
`;
