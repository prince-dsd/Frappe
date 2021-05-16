import styled from 'styled-components';

export const MainContentWrapper = styled.section`
  background-color: #0f1016;
  display: block;
  overflow: hidden;
`;
export const Container = styled.div`
  @media (min-width: 360px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    max-width: 1300px;
  }

  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const Column = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;
export const ContentTitle = styled.div`
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  margin-top: 20px;
`;
export const Title = styled.h2`
  font-size: 40px;
  font-weight: normal;
  color: #fff;
  text-transform: uppercase;
`;

export const ContentNav = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(40, 42, 57, 0.32);
  margin-bottom: 40px;
  position: relative;
`;
export const ContentTabs = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
`;
export const TabItem = styled.li`
  margin-right: 45px;
`;
export const TabLink = styled.a`
  color: #aaadb2;
  cursor: pointer;
  line-height: 40px;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: block;
  position: relative;
  transition: 0.4s ease;
  text-decoration: none;
  background-color: transparent;
  &:hover {
    color: #e50914;
    &:before {
      opacity: 1;
    }
  }
  &:before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    bottom: -16px;
    height: 2px;
    background-color: #e50914;
    transition: 0.4s ease;
    opacity: 0;
  }
`;

/// ///To DO
export const ContentSort = styled.div`
  position: relative;
`;
/// //////

export const TabContent = styled.div``;
export const TabPane = styled.div`
  display: block;
  transition: opacity 0.15s linear;
`;
export const GridRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
export const GridContent = styled.div`
  display: contents;
`;
