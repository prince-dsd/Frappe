import React from 'react';
import {
  GridItemWrapper,
  PopOver,
  Movie,
  MovieCover,
  MovieTitle,
  WatchMovie,
  MovieRate,
  MovieImage,
  CoverImage,
  MovieRating,
  MovieEstimate,
  RatingLayer,
  RatingType,
  FilmEstDiv,
  Plus,
  PlusButton,
  PlusIcon,
  PlusSpan,
  RatingSpan,
  InnerSpan,
  Minus,
  MinusButton,
  MinusIcon,
  WatchSpan,
  WatchArrow,
  PopTitle,
  PopInfo,
  PopCat,
  PopText,
  PopImdb,
  TitleLink,
  PopQuality,
  QualityLink,
  PopStats,
  PopStatsIcon,
  PopStatsComment,
  PopCategory,
  RateSpan,
  ImdbSpan,
} from './GridItem.styles';
const GridItem = ({ poster_path, original_title, overview, vote_average, name }) => {
  return (
    <GridItemWrapper>
      <Movie>
        <MovieCover>
          <MovieImage>
            <CoverImage poster_path={poster_path} />
          </MovieImage>
          <MovieRate>
            <MovieRating>
              <RatingLayer>
                <RatingType>+1</RatingType>
              </RatingLayer>
            </MovieRating>
            <MovieEstimate>
              <FilmEstDiv>
                <Plus>
                  <PlusButton>
                    <PlusIcon />
                  </PlusButton>
                </Plus>
                <PlusSpan>
                  <RatingSpan>
                    <InnerSpan>+1</InnerSpan>
                  </RatingSpan>
                </PlusSpan>
                <Minus>
                  <MinusButton>
                    <MinusIcon />
                  </MinusButton>
                </Minus>
              </FilmEstDiv>
            </MovieEstimate>
          </MovieRate>
        </MovieCover>
        <MovieTitle>
          {original_title}
          {name}
        </MovieTitle>
        <WatchMovie>
          Watch
          <WatchSpan>online</WatchSpan>
          <WatchArrow />
        </WatchMovie>
      </Movie>
      <PopOver>
        <PopTitle>
          <TitleLink>
            {original_title} {name}
          </TitleLink>
        </PopTitle>
        <PopInfo>
          <PopQuality>
            <QualityLink>HD 720</QualityLink>
          </PopQuality>
          <PopStats>
            <PopStatsIcon />
            1456
          </PopStats>
          <PopStats>
            <PopStatsComment />
            54
          </PopStats>
        </PopInfo>
        <PopCat>
          <PopCategory>Movies</PopCategory>
          <PopCategory>Action</PopCategory>
          <PopCategory>Comedy</PopCategory>
        </PopCat>
        <PopText>{overview}</PopText>
        <PopImdb>
          <RateSpan>{vote_average}</RateSpan>
          <ImdbSpan>2536</ImdbSpan>
        </PopImdb>
      </PopOver>
    </GridItemWrapper>
  );
};
export default GridItem;
