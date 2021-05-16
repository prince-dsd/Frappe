import React, { useState, useEffect } from 'react';
import {
  HomeWrapper,
  Container,
  ContainerRow,
  HomeNav,
  Prev,
  Next,
  ContainerCol,
  ContainerHeader,
  HomeSliderWrap,
  HomeSliderRight,
  SlickLoaded,
  NavButton,
} from './styles';
//Components
import SlideItem from './SlideItem/SlideItem.component';
import CarouselItem from './CarouselItem/CarouselItem.component';
const Home = ({ refProp }) => {
  const [slideItem, setSlideItem] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [carouselItems, setCarouselItems] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.themoviedb.org/4/discover/movie/?api_key=06e8cef0db2387c65967847d77165721&page=';

    fetch(`${apiUrl}=1`)
      .then((res) => res.json())
      .then((response) => {
        setCarouselItems(response.results);
        setSlideItem(response.results[4]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <HomeWrapper ref={refProp}>
      <Container>
        <ContainerRow>
          <ContainerCol>
            <ContainerHeader>
              <b> New items </b>
              of this season
            </ContainerHeader>
          </ContainerCol>
        </ContainerRow>

        <ContainerRow>
          <HomeSliderWrap>
            <SlickLoaded>{!isLoading && <SlideItem {...slideItem} />}</SlickLoaded>
          </HomeSliderWrap>
          <HomeSliderRight>
            {!isLoading && carouselItems.slice(0, 3).map((item) => <CarouselItem key={item.id} {...item} />)}
          </HomeSliderRight>
        </ContainerRow>
        <HomeNav>
          <NavButton>
            <Prev />
          </NavButton>
          <NavButton>
            <Next />
          </NavButton>
        </HomeNav>
      </Container>
    </HomeWrapper>
  );
};

export default Home;
