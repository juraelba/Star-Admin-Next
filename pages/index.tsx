import React from "react";
import News from "../components/News";
import CreateNew from "../components/CreateNew";
import LatestActivities from "../components/LatestActivities";
import {
  Container,
  TopContainer,
  LatestActivitiesContainer,
} from "./index.styles";
import { Activity } from "../types";

const Home: React.FC = () => {
  const latestActivities: Activity[] = [
    {
      id: 1,
      title: "New NFT Listed",
      date: "May 23, 2022",
      status: "Complete",
      author: "Chris Tate",
    },
    {
      id: 2,
      title: "News Article Edited",
      date: "May 23, 2022",
      status: "Pending",
      author: "Chris Tate",
    },
    {
      id: 3,
      title: "New Space Object Created",
      date: "May 23, 2022",
      status: "Complete",
      author: "Chris Tate",
    },
  ];

  return (
    <Container>
      <TopContainer>
        <News />
        <LatestActivitiesContainer>
          <LatestActivities data={latestActivities} />
        </LatestActivitiesContainer>
      </TopContainer>
      <CreateNew />
    </Container>
  );
};

export default Home;
