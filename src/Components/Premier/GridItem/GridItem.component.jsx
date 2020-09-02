import React from "react";
import {
  GridItemWrapper,
  Movie,
  MovieCover,
  MovieImage,
  CoverImage,
  MovieRate,
  MovieRating,
  RatingLayer,
  RatingType,
  MovieEstimate,
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
  MovieTitle,
  WatchMovie,
  WatchSpan,
  WatchArrow,
} from "./GridItem.styles";
const GridItem = ({ poster_path, original_title, overview, vote_average }) => {
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
        <MovieTitle>{original_title}</MovieTitle>
        <WatchMovie>
          Watch
          <WatchSpan>online</WatchSpan>
          <WatchArrow />
        </WatchMovie>
      </Movie>
    </GridItemWrapper>
  );
};

export default GridItem;
