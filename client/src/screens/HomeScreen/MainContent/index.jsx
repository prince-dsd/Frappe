import React, { useState, useEffect, useRef } from 'react';
import {
  MainContentWrapper,
  Container,
  Row,
  TabContent,
  Column,
  ContentNav,
  ContentTitle,
  Title,
  ContentSort,
  ContentTabs,
  TabItem,
  TabLink,
  TabPane,
  GridRow,
  GridContent,
} from './styles';

//Components

import GridItem from './GridItem/GridItem.component';
import Pagination from './Pagination/Pagination.component';

import Skeleton from './Skeleton/Skeleton.component';

import api from '../../../utilities/api';

const MainContent = ({ refProp }) => {
  const REACT_APP_MOVIES_URL = '/discover/movies';
  const REACT_APP_TV_URL = '/discover/tv';
  const REACT_APP_ANIME_URL = '/discover/anime';
  const REACT_APP_NEW_RELEASES_URL = '/discover/new';

  const [grid, setGrid] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [apiUrl, setUrl] = useState(REACT_APP_MOVIES_URL);
  const [page, setPage] = useState(1);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const useMountEffect = (effect) => useEffect(effect, []);

  const tabRef = useRef(null);
  useMountEffect(() => scrollToRef(tabRef));

  const moviesURL = () => {
    setPage(1);
    setUrl(REACT_APP_MOVIES_URL);
  };
  const tvURL = () => {
    setPage(1);
    setUrl(REACT_APP_TV_URL);
  };
  const animeURL = () => {
    setPage(1);
    setUrl(REACT_APP_ANIME_URL);
  };

  const newReleases = () => {
    setPage(1);
    setUrl(REACT_APP_NEW_RELEASES_URL);
  };

  const initialize = async () => {
    setLoading(true);
    try {
      console.log('Main content initialized');
      const res = await api.get(apiUrl, { params: { page } });
      console.log(res.data);
      setGrid(res.data.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    initialize();
  }, [page, apiUrl]);
  return (
    <MainContentWrapper ref={tabRef}>
      <Container>
        <Row>
          <Column>
            <ContentTitle>
              <Title>New Movies</Title>
            </ContentTitle>
            <ContentNav>
              <ContentTabs>
                <TabItem>
                  <TabLink onClick={newReleases}>New releases</TabLink>
                </TabItem>
                <TabItem>
                  <TabLink onClick={moviesURL}>Movies</TabLink>
                </TabItem>
                <TabItem>
                  <TabLink onClick={tvURL}>Tv series</TabLink>
                </TabItem>
                <TabItem>
                  <TabLink onClick={animeURL}>Anime</TabLink>
                </TabItem>
              </ContentTabs>
              <ContentSort></ContentSort>
            </ContentNav>
          </Column>
        </Row>
        <TabContent>
          <TabPane>
            <GridRow>
              <GridContent>
                {isLoading &&
                  Array(18)
                    .fill()
                    .map((ske, index) => <Skeleton key={index} />)}

                {!isLoading &&
                  grid.slice(2).map((gridItem) => {
                    return <GridItem key={gridItem.id} {...gridItem} />;
                  })}

                <Pagination page={page} setPage={setPage} tabRef={tabRef} scrollToRef={scrollToRef} />
              </GridContent>
            </GridRow>
          </TabPane>
        </TabContent>
      </Container>
    </MainContentWrapper>
  );
};

export default MainContent;
