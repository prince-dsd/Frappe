import React, { useState, useEffect } from 'react';
import {
  PremierWrapper,
  Container,
  Row,
  ColumnLarge,
  PremierTitle,
  Title,
  ComingSoon,
  PremierSpan,
  RightArrow,
  LoadMore,
} from './styles';
//Components
import GridItem from './GridItem/GridItem.component';
const Premier = () => {
  const [loading, setLoading] = useState(true);
  const [premier, setPremier] = useState(null);

  useEffect(() => {
    setLoading(true);
    const apiUrl =
      'https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/4/discover/movie/?api_key=06e8cef0db2387c65967847d77165721&primary_release_date.gte=2020-06-01';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPremier(data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <PremierWrapper>
      <Container>
        <Row>
          <ColumnLarge>
            <PremierTitle>
              <Title>Expected premiere</Title>
              <ComingSoon>
                <PremierSpan>All premieres</PremierSpan>
                <RightArrow />
              </ComingSoon>
            </PremierTitle>
          </ColumnLarge>
        </Row>
        <Row>{!loading && premier.map((item) => <GridItem key={item.id} {...item} />)}</Row>
        <Row>
          <ColumnLarge>
            <LoadMore>Show More</LoadMore>
          </ColumnLarge>
        </Row>
      </Container>
    </PremierWrapper>
  );
};

export default Premier;
