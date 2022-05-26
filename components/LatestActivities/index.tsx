import React from "react";
import Image from "next/image";
import {
  LatestActivitiesContainer,
  Header,
  Title,
  Body,
  Footer,
  Link,
  MoreButton,
} from "./styles";
import { Activity as ActivityType } from "../../types";
import MoreIcon from "../../assets/images/icons/more.svg";
import ArrowRightIcon from "../../assets/images/icons/arrow-right.svg";
import Activity from "../common/Activity";

interface LatestActivitiesProps {
  data: ActivityType[];
}

const LatestActivities: React.FC<LatestActivitiesProps> = ({ data }) => {
  return (
    <LatestActivitiesContainer>
      <Header>
        <Title>Latest Activities</Title>
        <MoreButton>
          <Image src={MoreIcon} />
        </MoreButton>
      </Header>
      <Body>
        {data.map((activity: ActivityType) => (
          <Activity {...activity} key={activity.id} />
        ))}
      </Body>
      <Footer>
        <Image src={ArrowRightIcon} alt=":( Not Found" />
        <Link>View all activity</Link>
      </Footer>
    </LatestActivitiesContainer>
  );
};

export default LatestActivities;
