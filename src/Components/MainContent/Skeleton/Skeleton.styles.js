import styled from "styled-components";
export const SkeletonWrapper = styled.div`
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
  height: 300px;
  position: relative;
  overflow: hidden;
`;
export const MovieImage = styled.a`
  transition: 0.4s ease;
  color: #0f1016;
  text-decoration: none;
  background-color: transparent;
`;

export const CoverImage = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(#0a0b10, #0a0b10);
  min-height: 100%;
  vertical-align: middle;
  animation: loading 2s infinite;
  @keyframes loading {
    0% {
      opacity: 0.5;
    }
    25% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.7;
    }
    75% {
      opacity: 0.9;
    }
    100% {
      opacity: 1;
    }
  }
`;
