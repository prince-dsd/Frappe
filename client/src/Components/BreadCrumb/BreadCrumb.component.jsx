import React from 'react';
import {
  BreadCrumbWrapper,
  Container,
  Row,
  Column,
  BreadCrumContent,
  BreadCrumbList,
  Speedbar,
  ItemScope,
  ItemUrl,
  ItemTitle,
  RightArrow,
  BreadCrumbBack,
  BackIcon,
  BackSpan,
} from './BreadCrumb.styles';
const BreadCrumb = () => {
  return (
    <BreadCrumbWrapper>
      <Container>
        <Row>
          <Column>
            <BreadCrumContent>
              <BreadCrumbList>
                <Speedbar>
                  <ItemScope>
                    <ItemUrl>
                      <ItemTitle>Suika</ItemTitle>
                    </ItemUrl>
                  </ItemScope>
                  <RightArrow>→ </RightArrow>
                  Page 2
                </Speedbar>
              </BreadCrumbList>
              <BreadCrumbBack>
                <BackIcon />
                <BackSpan>Back</BackSpan>
              </BreadCrumbBack>
            </BreadCrumContent>
          </Column>
        </Row>
      </Container>
    </BreadCrumbWrapper>
  );
};

export default BreadCrumb;
