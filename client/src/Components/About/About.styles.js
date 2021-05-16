import styled from 'styled-components';

export const AboutWrapper = styled.section`
  display: block;
  padding: 90px 0;
  background-color: #0c0c0f;
`;
export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1200px) {
    max-width: 1300px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const ColumnLarge = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
`;
export const AboutImage = styled.img.attrs({
  src: '/about.svg',
})`
  display: block;
  position: absolute;
  top: 0;
  left: 15px;
  width: 122px;
  border-style: none;
`;
export const AboutTitle = styled.h2`
  margin-bottom: 35px;
  padding-left: 190px;
  font-size: 34px;
  line-height: 34px;
  color: #fff;
  font-weight: normal;

  @media (min-width: 360px) {
    padding-top: 50px;
  }
  @media (min-width: 1200px) {
    padding-top: 0;
  }
`;
export const AboutText = styled.p`
  text-align: justify;
  padding-left: 190px;
  font-size: 16px;
  line-height: 24px;
  color: #94979c;

  @media (min-width: 360px) {
    display: none;
  }
  @media (min-width: 1200px) {
    display: block;
  }
`;
