import React from "react";
import Image from "next/image";
import {
  ActivityContainer,
  AvatarContainer,
  LeftContainer,
  DetailContainer,
  Title,
  Status,
  Author,
  Date,
} from "./styles";
import CircleImg from "../../../assets/images/circle.png";
import { Activity as ActivityProps } from "../../../types";

const Activity: React.FC<ActivityProps> = (props) => {
  const { title, status, author, date } = props;

  return (
    <ActivityContainer>
      <LeftContainer>
        <AvatarContainer>
          <Image src={CircleImg} alt=":( Not Found" />
        </AvatarContainer>
        <DetailContainer>
          <Title>{title}</Title>
          <Status>{status}</Status>
          <Author>by {author}</Author>
        </DetailContainer>
      </LeftContainer>
      <Date>{date}</Date>
    </ActivityContainer>
  );
};

export default Activity;
