import React from 'react';
import News from '../components/News';
import CreateNew from '../components/CreateNew';
import LatestActivities from '../components/LatestActivities';
import styled from 'styled-components';
// import {
//   Container,
//   TopContainer,
//   LatestActivitiesContainer,
// } from './index.styles';
import useIsMobile from '../hooks/useIsMobile';
import { Activity } from '../types';

const Home: React.FC = () => {
  const isMobile = useIsMobile();
  const latestActivities: Activity[] = [
    {
      id: "1",
      title: 'New NFT Listed',
      date: 'May 23, 2022',
      status: 'completed',
      author: 'Chris Tate',
    },
    {
      id: "2",
      title: 'News Article Edited',
      date: 'May 23, 2022',
      status: 'pending',
      author: 'Chris Tate',
    },
    {
      id: "3",
      title: 'New Space Object Created',
      date: 'May 23, 2022',
      status: 'completed',
      author: 'Chris Tate',
    },
  ];
  

  return (
    <Container>
      <TopContainer>
        <News />
        {isMobile && <CreateNew />}
        <LatestActivitiesContainer>
          <LatestActivities data={latestActivities} />
        </LatestActivitiesContainer>
      </TopContainer>
      {!isMobile && <CreateNew />}
    </Container>
  );
};

export default Home;

export const Container = styled.div`
  @media (max-width: 768px) {
    padding-top: 12px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  margin-bottom: 64px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const LatestActivitiesContainer = styled.div`
  flex-shrink: 0;
  width: 362px;
  padding-left: 64px;

  @media (max-width: 1024px) {
    width: 100%;
    padding-left: 0;
  }
`;

