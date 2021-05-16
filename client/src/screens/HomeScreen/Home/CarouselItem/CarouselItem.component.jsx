import React from 'react';
import { CarouselItemWrapper, CarouselInner, MovieItem, MovieCover, MovieSpan } from './CarouselItem.styles';

const CarouselItem = ({ poster_path, original_title, overview, vote_average }) => {
  return (
    <CarouselItemWrapper>
      <CarouselInner>
        <MovieItem>
          <MovieCover poster_path={poster_path} />
          <MovieSpan>{original_title}</MovieSpan>
        </MovieItem>
      </CarouselInner>
    </CarouselItemWrapper>
  );
};
export default CarouselItem;
