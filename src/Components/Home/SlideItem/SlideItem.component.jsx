import React from "react";
import {
  SlideItemWrap,
  HomeSlide,
  HomeSlideCover,
  CoverImage,
  HomeSlidePLay,
  HomeSlideTitle,
  HomeSlideInfo,
  HomeSlideCat,
  HomeSlideText,
  HomeSlideRating,
  Quality,
  QualityIcon,
  Stats,
  StatsIconPrimary,
  StatsComment,
  Category,
} from "./SlideItem.styles";
const SlideItem = ({ poster_path, id, original_title, vote_average }) => {
  return (
    <SlideItemWrap>
      <HomeSlide>
        <HomeSlideCover>
          <CoverImage poster_path={poster_path} />
          <HomeSlidePLay />
        </HomeSlideCover>
        <HomeSlideTitle>{original_title}</HomeSlideTitle>
        <HomeSlideInfo>
          <Quality>
            <QualityIcon>HD 720</QualityIcon>
          </Quality>
          <Stats>
            <StatsIconPrimary /> 4820
          </Stats>
          <Stats>
            <StatsComment /> 210
          </Stats>
        </HomeSlideInfo>
        <HomeSlideCat>
          <Category>Movies</Category>
          <Category>Action</Category>
          <Category>Comedy</Category>
        </HomeSlideCat>
        <HomeSlideText>
          After the boss demoted the CIA agent JJ, he gets a partner technical
          specialist Bobby, as well as a new task: to observe a single mother
          and her nine-year-old daughter Sophie, whose relative may be involved
          in a deal to sell plutonium. However, the
        </HomeSlideText>
        <HomeSlideRating>
          <span>
            <span>+14</span>
          </span>
        </HomeSlideRating>
      </HomeSlide>
    </SlideItemWrap>
  );
};

export default SlideItem;
