import React from "react";
import {
  SkeletonWrapper,
  Movie,
  MovieCover,
  MovieImage,
  CoverImage,
} from "./Skeleton.styles";
const Skeleton = () => {
  return (
    <SkeletonWrapper>
      <Movie>
        <MovieCover>
          <MovieImage>
            <CoverImage />
          </MovieImage>
        </MovieCover>
      </Movie>
    </SkeletonWrapper>
  );
};
export default Skeleton;
