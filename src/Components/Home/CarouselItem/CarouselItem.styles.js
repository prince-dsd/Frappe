import styled from "styled-components";
export const CarouselItemWrapper = styled.div`
  @media (min-width: 360px) {
    margin: 0 6px;
  }
  @media (min-width: 1200px) {
    width: 190px;
    min-height: 290px;
    height: 290px;
    margin: 0;
    margin-right: 38px;
  }
`;
export const CarouselInner = styled.div``;
export const MovieItem = styled.a`
  display: block;
  position: relative;
  overflow: hidden;

  transition: 0.4s ease;
  color: #e50914;
  text-decoration: none;
  background-color: transparent;
`;
export const MovieCover = styled.img.attrs(({ poster_path }) => ({
  src: `https://image.tmdb.org/t/p/w500${poster_path}`,
}))`
  display: block;
  border-style: none;
  @media (min-width: 360px) {
    width: 100%;
    height: auto;
  }
  @media (min-width: 1200px) {
    height: 290px;
    width: 190px;
  }
`;
export const MovieSpan = styled.span`
  @media (min-width: 360px) {
    display: none;
  }
  @media (min-width: 1200px) {
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
  }
`;
